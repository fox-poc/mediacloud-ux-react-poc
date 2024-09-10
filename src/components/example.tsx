//SDK import
import { getUser } from "@fox/mediacloud-ux-sdk-poc";

//global component import
//import { Card } from "@fox/mediacloud-ux-styleguide-poc";

import { useState } from "react";

export default function Example(props) {
  const imgStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const [user, setUser] = useState(null);

  const fetchUser = () => {
    const data = getUser();
    setUser(data);
  };

  return (
    <>
      <img
        style={imgStyle}
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="svelte-icon"
        height="200px"
      />
      <h1>You are on the react micro front end!</h1>
      <button onClick={fetchUser}>click here to call the sdk</button>
      {user && (
        <>
          <div>
            <h2>user name: {user.name}</h2>
            <h2>user age: {user.age}</h2>
            <h2>user job: {user.job}</h2>
          </div>
        </>
      )}
    </>
  );
}
