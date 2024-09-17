import { useEffect, useState } from "react";

import Example from "../example";
import Home from "../home/home";

export default function Router() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setRoute(window.location.pathname);
    });
    return () => window.removeEventListener("popstate", () => {});
  }, []);

  const append = window.location.hostname === "fox-poc.github.io" ? "/mediacloud-ux-root-config-poc" : "";

  return (
    <>
      {route === `${append}/home` && <Home/>}
      {route === `${append}/assets` && <Example text={'Assets'}/>}
      {route === `${append}/collections` && <Example text={'Collections'}/>}
      {route === `${append}/replay` && <Example text={'Channels'}/>}
    </>
  );
}
