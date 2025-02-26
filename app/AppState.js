import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car({
      make: 'mazda',
      model: 'miata',
      year: 1996,
      price: 4000,
      mileage: 250000,
      hasCleanTitle: false,
      engineType: '4 cylinder',
      isManualTransmission: true,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1620882814836-88a2c98c0f6d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlhdGF8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'toyota',
      model: 'tacoma',
      year: 1993,
      price: 5000,
      mileage: 175000,
      hasCleanTitle: false,
      engineType: '6 cylinder',
      isManualTransmission: false,
      color: 'blue',
      imgUrl: 'https://images.unsplash.com/photo-1583031849506-4f35952c3fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRhY29tYXxlbnwwfHwwfHx8Mg%3D%3D'
    }),
    new Car({
      make: 'porsche',
      model: '911 turbo',
      year: 2018,
      price: 95000,
      mileage: 4000,
      hasCleanTitle: true,
      engineType: '6 cylinder',
      isManualTransmission: true,
      color: 'white',
      imgUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnNjaGV8ZW58MHx8MHx8fDI%3D'
    }),
    new Car({
      make: 'subaru',
      model: 'baja',
      year: 2002,
      price: 16000,
      mileage: 89000,
      hasCleanTitle: true,
      engineType: 'boxer',
      isManualTransmission: false,
      color: 'yellow',
      imgUrl: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/02q4/267343/subaru-baja-photo-9829-s-original.jpg?fill=1:1&resize=1200:*'
    }),
  ]

  houses = [
    new House({
      year: '1984',
      bedrooms: 3,
      bathrooms: 1,
      sqft: 1300,
      price: 350000,
      description: "wonderful little home in the country",
      imgUrl: 'https://realestateagentpdx.com/wp-content/uploads/2022/12/1980s-split-level.png.webp'
    }),
    new House({
      year: '1962',
      bedrooms: 4,
      bathrooms: 2,
      sqft: 2200,
      price: 475000,
      description: "fixer upper in city limits",
      imgUrl: 'https://www.southernliving.com/thmb/j-onxmK5zN__68Y1cniFKxiiTJk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-148099801-cc999885b395419fa6cbb6884b71f53a.jpg'
    }),
    new House({
      year: '1975',
      bedrooms: 1,
      bathrooms: 2,
      sqft: 800,
      price: 120000,
      description: "flat with extra bathroom instead of closet space",
      imgUrl: 'https://www.remodelista.com/wp-content/uploads/2015/03/fields/garage-studio-apartment-by-Karin-Montgomery-Spath-Remodelista.jpg'
    }),
    new House({
      year: '2010',
      bedrooms: 5,
      bathrooms: 3,
      sqft: 3200,
      price: 622000,
      description: "too rich for your blood, blood",
      imgUrl: 'https://houston.culturemap.com/media-library/houston-boasts-a-wealth-of-new-homes-on-the-market.jpg?id=26719783&width=2000&height=1500&quality=65&coordinates=133%2C0%2C133%2C0'
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())