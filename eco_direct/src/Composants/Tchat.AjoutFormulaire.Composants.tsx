import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [text, setText] = useState("red");

  return (
    <>
    <form>
    <button type="button" onClick={() => setText("blue")}>
        Envoyer message
      </button>
    </form>  
    </>
  )
}

