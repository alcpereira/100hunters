type CardPropsTypes = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardPropsTypes) {
  return (
    <div draggable className="border-2 bg-sky-50 text-xl">
      <h1 data-testid="card-title">{title}</h1>
      <p data-testid="card-body">{content}</p>
    </div>
  );
}
