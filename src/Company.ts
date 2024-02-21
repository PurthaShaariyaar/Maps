// Import required modules
import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

/**
 * Create a Company class
 * Properties -- name, catch phrase, location (lat and lng), markerContent()
 */
export class Company implements Mappable {
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

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Company Phrase: ${this.catchPhrase}</h3>
      </div>
    `
  };
}
