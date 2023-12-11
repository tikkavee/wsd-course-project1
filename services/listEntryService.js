import { sql } from "../database/database.js";

const createListEntry = async (listId, name) => {
    await sql `INSERT INTO shopping_list_items (shopping_list_id, name) VALUES (${ listId }, ${ name })`;
    console.log("lisatty taski");
};

const findListEntries = async (listId) => {
    const rows = await sql `SELECT * FROM shopping_list_items WHERE shopping_list_id = ${ listId } ORDER BY (collected = 'true'), name ASC`;
    console.log("yksittaiset taskit " + rows[0]);
    return rows;

};

const completeListEntry = async (id) => {
    await sql `UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
    console.log("poistettu taski");
};

export { createListEntry, findListEntries, completeListEntry };