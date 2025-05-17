import { FriendsComponents } from "./FriendsComponents";
import { useFetch } from "./useFetch";

export function Friends() {
  const {
    datos: monz,
    cargando: cmonz,
    nofunciono: nmonz,
  } = useFetch("https://xat.com/web_gear/chat/profile2.php?n=EroticCakes");
  const {
    datos: mythes,
    cargando: cmythes,
    nofunciono: nmythes,
  } = useFetch("https://xat.com/web_gear/chat/profile2.php?n=Schroederz");

  const isLoading = cmonz && cmythes;
  const isError = nmonz && nmythes;

  if (isLoading) return <div>Cargando estoy</div>;
  if (isError) return <div>Carga fallida</div>;
  console.log(monz);

  return (
    <>
      <FriendsComponents {...monz}></FriendsComponents>
      <FriendsComponents {...mythes}></FriendsComponents>
    </>
  );
}
