import { Component, OnInit, ViewChild } from '@angular/core';
import { OSM_TILE_LAYER_URL, MapComponent as LeafletMap  } from '@yaga/leaflet-ng2';
import { LatLng, Point, Icon, DivIcon } from 'leaflet'; 
import 'style-loader!leaflet/dist/leaflet.css';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';

import { CalendarEvent } from 'ngx-calendar';
import { EventsService } from '../../@core/data/events.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild(LeafletMap) private mapComponent: LeafletMap;


  tileLayerUrl = OSM_TILE_LAYER_URL;
  public iconUrl = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-48.png';
  public iconSize: Point = new Point(38, 40);
  public divIconSize: Point = new Point(50, 30);
  public nullIconSize: Point = new Point(13, 0);
  public shadowUrl = 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png';
  public shadowSize: Point = new Point(0, 0);
  provider = new OpenStreetMapProvider();
  options = {iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-48.png'};
  icon = new Icon(this.options);
  myIcon = new DivIcon({
    iconSize: new Point(90, 30),
    html: 'Title'
  });


  events: CalendarEvent[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.events = [];
    const searchControl = new GeoSearchControl({
      provider: this.provider,
      style: 'bar',
      autoClose: true,
      keepResult: true,
      marker: {
        icon: this.myIcon,
        draggable: true,
      },
      popupFormat: ({ query, result }) => {
        return `
        <div class="card border-0">
          <img class="card-img-top" src="assets/images/kitten-default.png" alt="React Native UI Kitten">     
          <div class="card-body">
            <div class="title"> `
              + result.label + 
            `</div>
          </div>
        </div>
        `;
      }
    });
    this.mapComponent.addControl(searchControl);
  }

  zoomChange ($event) {
  }

}
