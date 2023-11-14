import React from "react";
import emojipedia from "../emojipedia";
import Description from "./Description";

function createItems(item) {
  return (
    <Description
      key={item.id}
      emote={item.emoji}
      name={item.name}
      meaning={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createItems)}</dl>
    </div>
  );
}

export default App;
