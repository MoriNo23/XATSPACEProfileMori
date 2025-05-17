import { useState } from "react";
import { PostContainer } from "./PostContainer";
import { AboutMe } from "./AboutMe";
import { AudioLines, Home } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { Contact } from "lucide-react";
import { Send } from "lucide-react";
import { Friends } from "./Friends";
import { SendMe } from "./SendMe";
import { AudioLiness } from "./AudioLiness";
function App() {
  const user = {
    name: "Mori",
    subname: "DouxSommeil",
    message:
      "La humanidad no puede ganar nada sin primero dar algo a cambio. Para obtener, algo de igual valor debe perderse. Esa es la primera ley de la Alquimia: la Ley del Intercambio Equivalente. <strong>En aquellos días, creímos que esa era la verdad del mundo.</strong>",
  };
  const [mostrarActivo, setMostrarActivo] = useState("home");
  const [pause, setpause] = useState(true);
  return (
    <>
      <div className="max-[600px]:flex-col max-[600px]:scale-x-6np0 flex grow main-containers-style m-20 rounded-2xl overflow-auto">
        <aside className="max-[600px]:flex-row flex flex-col items-center p-10 bg-linear-to-b from-neutral-900 to-neutral-700">
          <section className="flex gap-5 text-sm">
            <img
              src="src/assets/avatar_image1.svg"
              alt="avatar"
              className="w-10 h-10 avatar"
            />
            <div className="flex flex-col">
              <strong>{user.name}</strong>
              <br></br>
              {user.subname}
            </div>
          </section>

          <nav className="max-[600px]:flex-row flex flex-col font-bold text-2xl gap-1.5 m-auto ">
            <div onClick={() => setMostrarActivo("home")}>
              <Home></Home>
            </div>
            <div onClick={() => setMostrarActivo("About")}>
              <Fingerprint />
            </div>
            <div onClick={() => setMostrarActivo("Friends")}>
              <Contact />
            </div>
            <div onClick={() => setMostrarActivo("SendMe")}>
              <Send />
            </div>
          </nav>
        </aside>
        <main className="p-10 m-5 overflow-auto max-w-160 min-w-160 bg-scroll">
          {mostrarActivo === "home" && (
            <PostContainer {...user}></PostContainer>
          )}
          {mostrarActivo === "About" && <AboutMe></AboutMe>}
          {mostrarActivo === "Friends" && <Friends></Friends>}
          {mostrarActivo === "SendMe" && <SendMe></SendMe>}
        </main>
      </div>

      <footer className="flex">
        ByMori23
        {pause && <audio src="src/assets/The_Surfer.mp3" autoPlay></audio>}
        <AudioLiness
          className="absolute right-0 bottom-1"
          pause={pause}
          onClick={() => (pause ? setpause(false) : setpause(true))}
        ></AudioLiness>
      </footer>
    </>
  );
}

export default App;
