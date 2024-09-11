import { useEffect, useState } from "react";

import Example from "../example";

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
      {route === '/home' && <Example text={'Home'}/>}
      {route === '/people' && <Example text={'People'}/>}
      {route === '/replay' && <Example text={'Replay'}/>}
      {route === '/channels' && <Example text={'Channels'}/>}
    </>
  );
}
