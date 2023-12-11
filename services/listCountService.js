import { sql } from "../database/database.js";

const findShoppingLists = async () => {
    const count = await sql `SELECT count(*) AS count_number FROM shopping_lists`;

    if (count && count[0] && count[0].count_number) {
        console.log("löytyi listoja")
        return count[0].count_number;
    }
    console.log("ei löytynyt listoja");
    return 0;

};

const findShoppingListItems = async () => {
    const count = await sql `SELECT count(*) AS count_items FROM shopping_list_items`;

    if (count && count[0] && count[0].count_items) {
        console.log("löytyi itemejä");
        return count[0].count_items;
    }
    console.log("ei löytynyt itemejä");
    return 0;

};


export { findShoppingListItems, findShoppingLists };