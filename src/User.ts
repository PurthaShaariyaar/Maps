// Import faker module
import { faker } from "@faker-js/faker";

/**
 * Create a User Class
 * Properties -- name, location (lat and lng)
 * Use constructor to initialize all properties
 * Do not need to assign modifiers to constructor since no arguments
 */
export class User {
  name: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  };
}
