export default function SecondBlock({
  secondBlockData = [],
  handleTransferFromSecondToThirdBlock,
  handleTransferBackFromSecondToFirst,
}) {
  return (
    <div className="block">
      {secondBlockData ? (
        <ul>
          {secondBlockData.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
        </ul>
      ) : null}
      {secondBlockData.length ? (
        <div>
          <button onClick={handleTransferBackFromSecondToFirst}>
            Transfer first to left
          </button>
          <button onClick={handleTransferFromSecondToThirdBlock}>
            Transfer first to right
          </button>
        </div>
      ) : null}
    </div>
  );
}
