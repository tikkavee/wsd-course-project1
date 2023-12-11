import { serve } from "./deps.js";
import { configure } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as listController from "./controllers/listControllers.js";
import * as listEntryController from "./controllers/listEntryControllers.js";
import * as requestUtils from "./utils/requestUtils.js";



const fun = () => {
  return 'hello world!';
}

export { fun };

configure({
  views: `${Deno.cwd()}/views/`,
});


const handleRequest = async (request) => {
  const url = new URL(request.url);

  if(url.pathname === "/" && request.method === "GET") {
    return await listController.getMain(request);
   
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await listController.addList(request);

  } else if ( url.pathname === "/lists" && request.method === "GET") {
    return await listController.viewLists(request);

  } else if (url.pathname.match("/lists/[0-9]+") && request.method === "GET") {
    return await listController.viewList(request); 

  } else if (url.pathname.match("/lists/[0-9]+/items/[0-9]+/collected") && request.method === "POST") {
    return await listEntryController.completeEntry(request);
     
  } else if (url.pathname.match("/lists/[0-9]+/deactivate") && request.method === "POST") {
    return await listController.deleteList(request);
    
  } else if (url.pathname.match("/lists/[0-9]+/items") && request.method === "POST") {
    return await listEntryController.addEntryToList(request);
    
  } else {
    return new Response("Not found", { status: 404 });
  }

};
export { handleRequest };

serve(handleRequest, { port: 7772 });
