import Card from "~/components/Card/Card";

export default function Column() {
  return (
    <div
      className="border border-solid border-1 border-gray-700 rounded-md py-5 px-2"
      onDragOver={() => console.log("dragging over")}
    >
      <h1>This is a column</h1>
      <Card title="hello" content="world" />
    </div>
  );
}
