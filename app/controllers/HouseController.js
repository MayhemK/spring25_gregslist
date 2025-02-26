import { AppState } from "../AppState.js";
// import { HouseService } from "../services/HouseService.js";


export class HouseController {
  constructor() {
    AppState.on('cars', this.drawHouses)
    // houseService.loadHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let housesHTML = ''
    houses.forEach(house => houseCardsContent += house.HouseCard)
    const houseListingsElem = document.getElementById('houseListings')
    houseListingsElem.innerHTML = houseCardsContent
  }
}