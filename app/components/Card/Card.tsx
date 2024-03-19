type CardPropsTypes = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardPropsTypes) {
  return (
    <div draggable className="border-2 bg-sky-50 text-xl">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
