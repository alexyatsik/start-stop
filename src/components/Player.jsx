import {useRef, useState} from "react";

export default function Player() {
  const playerNameRef = useRef();

  const [playerName, setPlayerName] = useState(null);

  function buttonClickHandler() {
    setPlayerName(playerNameRef.current.value);
  }

  const playerNameTitle = playerName ?? 'unknown entity';

  return (
    <section id="player">
      <h2>Welcome, {playerNameTitle}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={buttonClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
