import { useEffect, useState } from "react";

import Example from "../example";

export default function Router(props) {
  const [route, setRoute] = useState(window.location.pathname);

  console.log(window.location.pathname)

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      setRoute(window.location.pathname);
    });
    return () => window.removeEventListener("popstate", () => {});
  }, []);

  return (
    <>
      {route === '/mediacloud-root-config/home' && <Example text={'Home'}/>}
      {route === '/mediacloud-root-config/people' && <Example text={'People'}/>}
      {route === '/mediacloud-root-config/replay' && <Example text={'Replay'}/>}
      {route === '/mediacloud-root-config/channels' && <Example text={'Channels'}/>}
    </>
  );
}
