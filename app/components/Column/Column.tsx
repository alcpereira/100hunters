import Card from "~/components/Card/Card";

export default function Column() {
  return (
    <div
      className="border-1 rounded-md border border-solid border-gray-700 px-2 py-5"
      onDragOver={() => console.log("dragging over")}
    >
      <h1>This is a column</h1>
      <Card title="hello" content="world" />
    </div>
  );
}
