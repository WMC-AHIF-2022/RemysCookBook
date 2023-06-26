import {fetchRestEndpoint} from "../../utils/client-server.js";
import {Menu} from "../../utils/model";

let menus: Menu[] = [];

window.onload = async () => {
  await getMenus();
  console.log(menus);

  const weekMenus = document.getElementById("menuWeekplan") as HTMLDivElement;

  for (let menu of menus) {
    console.log(menu);
    printWeekmenus(menu);

    await resfreshWeekMenus();
  }

  async function resfreshWeekMenus() {
    await getMenus();
    console.log(menus);

    weekMenus.innerHTML = "";
    for (let menu of menus){
        printWeekmenus(menu);
    }
  }

  async function getMenus() {
    let allMenus: Menu[] = await fetchRestEndpoint("http://localhost:3005/api/menus", "GET").then(r => r.json());
    menus = [];
    for (let menu of allMenus){
        console.log(menu);
        if (menu.accepted === "true" /*&& isDateWithinNext7Days(menu.date)*/){
          menus.push(menu);
        }
        else if (isDateInThePast(menu.date)){
          //await fetchRestEndpoint(`http://localhost:3005/api/menus/${menu.recipeID}`, "DELETE", menu);
        }
    }
    menus.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  function isDateWithinNext7Days(dateString: string): boolean {
    const date = new Date(dateString);
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
  
    return date >= today && date <= nextWeek;
  }

  function isDateInThePast(dateString: string): boolean { 
    const date = new Date(dateString);
    const today = new Date();
  
    return date < today;
  }

  function getWeekday(date: Date): string {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdayIndex = date.getDay();
    return weekdays[weekdayIndex];
  }

  function formatDateString(dateString: string): string {
      const year = dateString.substring(0, 4);
      const month = dateString.substring(5, 7);
      const day = dateString.substring(8, 10);

      const date = new Date(dateString.substring(0,10));
      const weekday = getWeekday(date);

      return `${weekday}, ${day}.${month}.${year}`;
  }

  function printWeekmenus(menu: Menu) {
    weekMenus.innerHTML += `<div style="margin-bottom: 10%;"></div>
    <div class="date-weekplaner"> 
      <h1 id="textDate" class="weekplaner-date">${formatDateString(menu.date)}</h1>
    </div>
    <div class="grid-container-weekplaner">
        <div class="grid-item-weekplaner-picture">
            <img id="imgRecipe" class="menu-cover" src="../../img/${menu.recipeID}.png" alt="${menu.recipeID}">
        </div>
        <div class="grid-item-weekplaner-recipe-name">
            <h1 id="textRecipeName" class="weekplaner-recipe-name">${menu.recipeName}</h1>
        </div>
    </div>`;
  }
}