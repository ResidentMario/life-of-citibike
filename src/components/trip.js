import React from 'react';
import { Polyline } from 'react-leaflet';


export default class Trip extends React.Component {
    render() {
        const ex_coords = [
            [40.73516121180963, -74.01094436645508],
            [40.77157186825386, -73.98725509643553]
        ];
        return <Polyline positions={ex_coords}/>
    }
}