import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getData } from "~/db/test.server";

export const meta: MetaFunction = () => {
  return [
    { title: "100Hunters" },
    { name: "description", content: "The hunt!" },
  ];
};

export async function loader() {
  const data = await getData();
  return json(data);
}

export default function Index() {
  const data = useLoaderData();
  return (
    <div className="min-h-full w-full">
      <p>Data coming from DB:</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
