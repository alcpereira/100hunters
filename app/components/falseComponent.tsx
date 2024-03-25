type FalseComponentPropsTypes = {
  title: string;
  content: string;
};

export default function FalseComponent({
  title,
  content,
}: FalseComponentPropsTypes) {
  return (
    <div draggable className="border-2 bg-sky-50 text-xl">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
