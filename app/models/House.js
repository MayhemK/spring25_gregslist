

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

  get houseCard() {
    return `
  <div class="col-12">
          <div class="shadow bg-light d-flex mb-4">
            <img src="${this.imgUrl}" alt="${this.sqft} ${this.bedrooms} house" class="house-img">
            <div class="p-3 flex-grow-1">
              <h4 class="d-flex justify-content-between">
                <div>
                  <p class="fs-4">$${this.price}</p>
                  <p>${this.description}</p>
                  <div class="">Built - ${this.year} </div>
                </div>
                <div class="fs-5">
                  <p>${this.bedrooms} Bed</p>
                  <p>${this.bathrooms} Bath</p>
                  <p>${this.sqft} sqft</p>
                </div>
              </h4>
            </div>
          </div>
        </div>
  `
  }
}