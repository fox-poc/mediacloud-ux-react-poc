//SDK import
import { getUser } from "@fox/mediacloud-ux-sdk-poc";

//global component import
import { Button } from "@fox/mediacloud-ux-styleguide-poc";

import { useState } from "react";

export default function Example({ text }: { text: string }) {
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
        alt="react-icon"
        height="200px"
      />
      <h1 style={{ color: "#000" }}>You are on the {text} page, in react micro front end.</h1>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button onClick={fetchUser} text={"call sdk"} />
      </div>
      {user && (
        <>
          <div>
            <h2>user name: {user.name}</h2>
            <h2>user job: {user.job}</h2>
            <h2>user age: {user.age}</h2>
          </div>
        </>
      )}
    </>
  );
}
