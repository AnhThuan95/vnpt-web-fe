import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.css']
})
export class HeadquartersComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;

  ngOnInit() {
    this.lat = 18.339334;
    this.lng = 105.895370;
    this.zoom = 17;
  }

  mapClick(event) {
    // console.log(event);
  }

  mapDoubleClick(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
