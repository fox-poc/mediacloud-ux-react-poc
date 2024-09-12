import { useEffect, useState } from "react";

import Example from "../example";
import Home from "../home/home";

export default function Router(props) {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      setRoute(window.location.pathname);
    });
    return () => window.removeEventListener("popstate", () => {});
  }, []);

  return (
    <>
      {route === '/mediacloud-root-config/home' && <Home text={'Home'}/>}
      {route === '/mediacloud-root-config/assets' && <Example text={'Assets'}/>}
      {route === '/mediacloud-root-config/collections' && <Example text={'Collections'}/>}
      {route === '/mediacloud-root-config/replay' && <Example text={'Channels'}/>}
    </>
  );
}
