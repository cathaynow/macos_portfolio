import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    /**
     * Set the active location in the store.
     * If `location` is omitted or not a valid location object, this will
     * fall back to `DEFAULT_LOCATION` so callers don't accidentally set
     * `activeLocation` to `null` or an invalid value.
     *
     * Note: call `resetActiveLocation()` to explicitly reset to the default.
     */
    setActiveLocation: (location) =>
      set((state) => {
        // basic validation: a location should be an object and have at least
        // one of the expected identifying properties (id, type, or name)
        const isValidLocation =
          location && typeof location === "object" &&
          ("id" in location || "type" in location || "name" in location);

        state.activeLocation = isValidLocation ? location : DEFAULT_LOCATION;
      }),

    // Resets the active location to the default location
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
