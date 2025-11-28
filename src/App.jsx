import gsap from "gsap";

import { Dock, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import { Contact, Finder, Resume, Safari, Terminal, Text } from "#windows";
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
    </main>
  );
};

export default App;
