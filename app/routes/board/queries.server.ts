import db from "~/db/db.server";

export async function getBoards() {
  const { rows } = await db.execute("SELECT * FROM queries");
  return rows;
}

export type ColumnType = { id: number; name: string };
export type CardType = { id: number; name: string; columnId: number };
export async function getCardsAndColumns() {
  const { rows: column } = await db.execute({
    sql: `
    SELECT column.id, column.name FROM column
    LEFT JOIN board ON column.boardId = board.id
    WHERE board.id = ?;
    `,
    args: [1],
  });

  const { rows: card } = await db.execute({
    sql: `
    SELECT card.id, card.name, card.columnId FROM card
    FULL JOIN column ON card.columnId = column.id
    FULL JOIN board ON column.boardId = board.id
    WHERE board.id = ?;
  `,
    args: [1],
  });

  return { column, card } as unknown as {
    column: ColumnType[];
    card: CardType[];
  };
}

export async function mutateCardColumn(cardId: number, columnId: number) {
  await db.execute({
    sql: "UPDATE card SET columnId = ? WHERE id = ?;",
    args: [columnId, cardId],
  });
}
