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
      {route === '/home' && <Home/>}
      {route === '/assets' && <Example text={'Assets'}/>}
      {route === '/collections' && <Example text={'Collections'}/>}
      {route === '/replay' && <Example text={'Channels'}/>}
    </>
  );
}
