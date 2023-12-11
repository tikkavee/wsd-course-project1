import { sql } from "../database/database.js";

const findAllActiveLists = async () => {
    const listat = await sql `SELECT * FROM shopping_lists WHERE active = true`;
    console.log("listat " + listat);
    return listat;
};

const addNewShoppingList = async (name) => {
    await sql `INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const updateShoppingList = async (id) => {
    await sql `UPDATE shopping_lists SET active = false WHERE id = ${ id }`;


};

const findById = async (id) => {
    console.log(id);
    const nimi = await sql `SELECT * FROM shopping_lists WHERE id = ${ id }`;
    console.log("rivit ovat" + nimi[0])
    return nimi[0];

}

export { findAllActiveLists, addNewShoppingList, updateShoppingList, findById };