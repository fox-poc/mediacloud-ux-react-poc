export default function Example(props) {
  const imgStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
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
    </>
  );
}
