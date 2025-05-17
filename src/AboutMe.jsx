import { AboutMeTable } from "./AboutMeTable";

export function AboutMe() {
  const personalInfo = {
    config: {
      names: "Nombre",
      countrys: "Pais",
      ages: "Edad",
    },
    data: {
      names: "Thony",
      countrys: "Venezuela",
      ages: "25",
      header: "src/assets/about/personal_path52.png",
    },
  };

  const favoriteInfo = {
    config: {
      music: "Artistas",
      games: "Juegos",
      anime: "Anime",
    },
    data: {
      music: "Pinback, Phoenix, DaftPunk, Deadmau5, Jacoo",
      games: "Variados, no estoy jugando",
      anime: "HXH, FMA, DEATHNOTE, HNK, JJK, ANIMES OLDS+",
      header: "src/assets/about/persona_favorite.png",
    },
  };
  const interestInfo = {
    config: {
      music: "Estilo de vida",
      games: "Pasa tiempo",
      anime: "Deporte",
    },
    data: {
      music: "Tranquilo, optimista, no rendirse",
      games:
        "Escuchar musica Chill o ambient, ver youtube, estudiar programacion, leer, peliculas y series",
      anime: "Yoga, rutina en casa, running",
      header: "src/assets/about/personal_interests.png",
    },
  };
  return (
    <article className="aboutme__container">
      <section className="aboutme__personal grid grid-cols-2 grid-rows-2 gap-10">
        <AboutMeTable config={personalInfo.config} data={personalInfo.data} />
        <AboutMeTable config={favoriteInfo.config} data={favoriteInfo.data} />
        <AboutMeTable config={interestInfo.config} data={interestInfo.data} />
      </section>
    </article>
  );
}
