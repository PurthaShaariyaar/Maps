/**
 * Interface Mappable -- gatekeeper to all other classes to be an
 *                       argument to addMarker method
 * Requirements -- need a location: object & properties of location: lat & lng both numbers
 *              -- also a markerContent() function
 */
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  };
}


