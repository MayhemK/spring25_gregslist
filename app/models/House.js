

export class House {
  /**@param {{
  * year: String;
  * bedrooms: Number;
  * bathrooms: Number;
  * sqft: Number;
  * price: Number;
  * description: String;
  * imgUrl: String; }} data
  */
  constructor(data) {
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


}