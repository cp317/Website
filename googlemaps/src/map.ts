import {
  Component,
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';


@Component({
  selector: 'map',
  styles: [`
    .sebm-google-map-container {
      height: 400px;
      width: 100%;
      float: right;
     }
  `],
  template: `
    <sebm-google-map 
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      [disableDefaultUI]="false"
      [zoomControl]="false"
      (mapClick)="mapClicked($event)">
    
      <sebm-google-map-marker 
          *ngFor="let b of beacons; let i = index"
          (markerClick)="clickedBeacon(b.label, i)"
          [latitude]="b.lat"
          [longitude]="b.lng"
          [label]="b.label"
          [markerDraggable]="b.draggable"
          (dragEnd)="beaconDragEnd(b, $event)">
          
        <sebm-google-map-info-window>
          {{b.course}}
        </sebm-google-map-info-window>
        
      </sebm-google-map-marker>
      
      <sebm-google-map-circle [latitude]="lat + 0.3" [longitude]="lng" 
          [radius]="5000"
          [fillColor]="'red'"
          [circleDraggable]="true"
          [editable]="true">
      </sebm-google-map-circle>

    </sebm-google-map>
`})
export class Map {
  // google maps zoom level
  zoom: number = 13;
  
  // initial center position for the map
  lat: number = 43.4724;
  lng: number = -80.5263;
  
  clickedBeacon(label: string, index: number) {
    console.log(`clicked the beacon: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.beacons.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      course: "CP317",
      draggable: true
    });
  }
  
  beaconDragEnd(b: beacon, $event: MouseEvent) {
    console.log('dragEnd', b, $event);
  }
  
  beacons: beacon[] = [
	  {
		  lat: 43.4724,
		  lng: -80.526,
		  course: "NULL",
		  draggable: false
	  },
	  {
		  lat: 43.4750,
		  lng: -80.526,
		  course: "NULL";
		  draggable: false
	  },
  ]
}
// just an interface for type safety.
interface beacon {
	lat: number;
	lng: number;
	id?: string;
	course: string;
	draggable: boolean;
}

@NgModule({
  imports: [ BrowserModule, AgmCoreModule.forRoot() ],
  declarations: [ Map ],
  bootstrap: [ Map ]
})
export class MapModule {}
