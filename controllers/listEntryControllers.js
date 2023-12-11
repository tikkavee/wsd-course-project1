import * as listEntryService from "../services/listEntryService.js";
import * as requestUtils from "../utils/requestUtils.js";




  const addEntryToList = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");

    const formData = await request.formData();
    const name = formData.get("name");
  
    await listEntryService.createListEntry(urlParts[2], name);
  
    return requestUtils.redirectTo(`/lists/${ urlParts[2]}`);
  };

  const completeEntry = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    console.log("collected arvoa ei vielä päivitetty");

    await listEntryService.completeListEntry(urlParts[4]);

    console.log("collected arvo paivitetty");
    
    return requestUtils.redirectTo(`/lists/${ urlParts[2] }`);
  };

  export { addEntryToList, completeEntry };  