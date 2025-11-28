import gsap from "gsap";

import { Dock, Home, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import {
  Contact,
  Finder,
  Photos,
  Resume,
  Safari,
  Terminal,
  Text,
} from "#windows";
import Image from "#windows/Image";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />

      <Home />
    </main>
  );
};

export default App;
