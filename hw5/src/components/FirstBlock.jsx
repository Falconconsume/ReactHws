export default function FirstBlock({
  data = [],
  handleTransferFromFirstToSecondBlock,
}) {
  return (
    <div className="block">
      {data ? (
        <ul>
          {data.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
        </ul>
      ) : (
        <p>You don`t have any tasks</p>
      )}
      <button onClick={handleTransferFromFirstToSecondBlock}>
        Transfer first to right{" "}
      </button>
    </div>
  );
}
