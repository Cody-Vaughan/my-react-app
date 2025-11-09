export default function Board() {
  return(
    <>
    <div class="board-row">
      <Square />
      <Square />
      <Square />
    </div>
      <div class="board-row">
        <Square />
        <Square />
        <Square />
    </div>
      <div class="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    </>

  );
}

function Square() {
  return <button className="square">1</button>;
}