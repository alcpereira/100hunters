import clsx from "clsx";
import { useState } from "react";

export type CardPropsTypes = {
  title: string;
  content: string;
  id: number;
  columnId: number;
};

export default function Card({ title, content, id, columnId }: CardPropsTypes) {
  const [isDragging, setIsDragging] = useState(false);

  const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.clearData();
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("application/hunters-card", id.toString());
    e.dataTransfer.setData("application/hunters-column", columnId.toString());
    setTimeout(() => {
      setIsDragging(true); // This is a hack to make the "placeholder" card a different color
    }, 0);
    console.log("drag start for id: ", { id, columnId });
  };

  const handleOnDragEnd = () => {
    setIsDragging(false);
  };

  const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    // To use later for ordering within the column
    e.preventDefault();
  };

  return (
    <div
      className={clsx(
        "border-2",
        "bg-slate-500",
        isDragging && "opacity-50", // Set styles for the place holder here
        "text-xl",
      )}
      draggable
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
      onDragOver={handleOnDragOver}
    >
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
