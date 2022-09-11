import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'Map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  static Map:Map; 
  ngOnInit(): void {
    MapComponent.Map = new Map({
    view: new View({
      center: [72.877426,19.076090],
      zoom: 12,
      projection:'EPSG:4326'
    }),
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    controls: [],
    target: 'Map'
  });

  }

}
