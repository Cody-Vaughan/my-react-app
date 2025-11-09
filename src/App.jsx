
function Square({value}) {
  return <button className="square">value</button>;
}





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
