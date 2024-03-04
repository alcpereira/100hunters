import Column from "~/components/Column/Column";

export default function Board() {
  return (
    <div>
      <h1>Board</h1>
      <div className="flex flex-row gap-2">
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
}
