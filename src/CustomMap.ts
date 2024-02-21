// Import required modules
import { User } from './User';
import { Company } from './Company';

/**
 * Interface Mappable -- gatekeeper to all other classes to be an
 *                       argument to addMarker method
 * Requirements -- need a location: object & properties of location: lat & lng both numbers
 */
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

/**
 * Create a Custom Map of google maps API
 * property googleMap will be an instance of type google.map.Map
 *
 * Use constructor to create an instance of a new map
 */
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  };

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   });
  // };
}


