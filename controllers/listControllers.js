import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as listService from "../services/listServices.js";
import * as listEntryServices from "../services/listEntryService.js";
import * as requestUtils from "../utils/requestUtils.js";
import * as listCountService from "../services/listCountService.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  };

  const getMain = async (request) => {
    console.log("renderoidaan");

    const data = {
      listat: await listCountService.findShoppingLists(),
      items: await listCountService.findShoppingListItems(),
    };

    console.log(data);
    console.log(data.listat);
    console.log(data.items);


    return new Response(await renderFile("main.eta", data), responseDetails);
  };

  const addList = async (request) => {
    const formData = await request.formData();
    const name = formData.get("name");
  
    await listService.addNewShoppingList(name);
  
    return requestUtils.redirectTo("/lists");
  };

  const viewLists = async (request) => {
    const data = {
        lists: await listService.findAllActiveLists(),
    };
    return new Response(await renderFile("lists.eta", data), responseDetails);

  };

  const viewList = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    console.log(urlParts[2]);

    const data = {
        lists: await listService.findById(urlParts[2]),
        list: await listEntryServices.findListEntries(urlParts[2]),
    };
    console.log(data);
    console.log(data.lists);
    return new Response(await renderFile("list.eta", data), responseDetails);
  };

  const deleteList = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    await listService.updateShoppingList(urlParts[2]);

    return requestUtils.redirectTo("/lists");
  };



  export { addList, viewLists, viewList, deleteList, getMain };