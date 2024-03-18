import Column from "~/components/Column/Column";
import {
  type CardType,
  type ColumnType,
  getCardsAndColumns,
  mutateCardColumn,
} from "./queries.server";
import { useLoaderData } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import invariant from "invariant";

export async function loader() {
  const data = await getCardsAndColumns();
  return data;
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const cardId = data.get("cardId");
  invariant(cardId, "cardId is required");
  const columnId = data.get("columnId");
  invariant(columnId, "columnId is required");
  await mutateCardColumn(
    parseInt(cardId.toString()),
    parseInt(columnId.toString()),
  );

  return { ok: true };
}

function mapCardsToColumns(columns: ColumnType[], cards: CardType[]) {
  return columns.map((column) => {
    return {
      ...column,
      cards: cards.filter((card) => card.columnId === column.id),
    };
  });
}

export default function Board() {
  const { column, card } = useLoaderData<typeof loader>();
  const columns = mapCardsToColumns(column, card);
  return (
    <div>
      <h1>Board</h1>
      <p>{JSON.stringify(columns, null, 4)}</p>
      <div className="flex flex-row gap-2">
        {columns.map((column) => {
          const cards = column.cards.map((card) => ({
            ...card,
            title: card.name,
            content: card.name,
            id: card.id,
          }));
          return <Column cards={cards} key={column.id} columnId={column.id} />;
        })}
      </div>
    </div>
  );
}
