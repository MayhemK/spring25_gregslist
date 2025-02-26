import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";


export class HouseController {
  constructor() {
    AppState.on('cars', this.drawHouses)
    // houseService.loadHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let houseCardsContent = ''
    houses.forEach(house => houseCardsContent += house.houseCard)
    const houseListingsElem = document.getElementById('houseListings')
    houseListingsElem.innerHTML = houseCardsContent
  }
}