import React from "react"; 
import "./style.css";

function Title() {
  return (
    <header className = "headerNav">
<nav className = "navbar">
<ul>
  <li className = "gameTitle"><a href="/">Clicky Game</a>
  </li>
<li className = "gameStateTitle">Click an image to begin!</li>
<li className = "scoreTotal">
  Score: 0
  | Top Score: 0
</li>
</ul>
</nav>
</header>
  );
}

export default Title;
