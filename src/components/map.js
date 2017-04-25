import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Trip from './trip';


export default class NYCMap extends React.Component {
    render() {
        let tiles = <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            subdomains='abcd'
            key={1}
        />;

        // TODO: All the other map elements!
        let map_elements = [
            tiles,
            <Trip key={2}/>
        ];

        return <Map
            zoom={13}
            bounds={[[40.6794268, -73.92989109999999], [40.789747, -74.075979]]}
            scrollWheelZoom={false}>
            {map_elements}
        </Map>;
    }
}