export default function ThirdBlock({ thirdBlockData = [], handleDeleteTitle }) {
  return (
    <div className="block">
      {thirdBlockData ? (
        <ul>
          {thirdBlockData.map((task) => {
            return <li key={task.id}>{task.title}</li>;
          })}
        </ul>
      ) : null}
      {thirdBlockData.length ? (
        <button
          onClick={() =>
            handleDeleteTitle(thirdBlockData[thirdBlockData.length - 1].id)
          }
        >
          Remove last item
        </button>
      ) : null}
    </div>
  );
}
