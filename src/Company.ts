// Import required modules
import { faker } from "@faker-js/faker";

/**
 * Create a Company class
 * Properties -- name, catch phrase, location (lat and lng)
 */
export class Company {
  companyName: string;
  catchPhrase: string;

  location: {
    lat: number,
    lng: number
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
