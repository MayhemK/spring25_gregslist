import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


class HouseService {

  createHouse(houseData) {
    console.log('hi');
    const newHouse = new House(houseData)
    console.log('no');


  }
}
export const houseService = new HouseService()