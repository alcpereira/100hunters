import clsx from "clsx";
import { useState } from "react";
import Card, { CardPropsTypes } from "~/components/Card/Card";
import { useSubmit } from "@remix-run/react";

type ColumnPropsTypes = {
  cards: CardPropsTypes[];
  columnId: number;
};

export default function Column({ cards, columnId }: ColumnPropsTypes) {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [hasDrop, setHasDrop] = useState(false);
  const submit = useSubmit();

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    // Needed to be a droppable zone
    e.preventDefault(); // Should add filtering to check if valid drop
    const cardId = e.dataTransfer.getData("application/hunters-card");
    console.log("drop", { cardId, columnId });
    submit({ cardId, columnId }, { method: "POST", navigate: false });
    setIsDraggedOver(false);
    setHasDrop(true);
    setTimeout(() => {
      setHasDrop(false);
    }, 1000);
  };

  const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("application/hunters-column", columnId.toString());

    // Needed to be a droppable zone
    e.preventDefault(); // Should add filtering to check if valid drop
    setIsDraggedOver(true);
  };

  const handleOnDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("application/hunters-column", "");
    setIsDraggedOver(false);
  };

  const handleOnDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("application/hunters-column", columnId.toString());
    console.log("drag enter");
  };

  return (
    <div
      className={clsx(
        "border-1 min-h-48 rounded-md border border-solid border-gray-700 px-2 py-5",
        isDraggedOver ? "bg-sky-50" : "bg-slate-500",
        [hasDrop && "bg-red-400"],
      )}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDragEnter={handleOnDragEnter}
    >
      <h1>This is a column</h1>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
