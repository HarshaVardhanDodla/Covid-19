import React from 'react'
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from './util';

function Map({ countries, casesType, center, zoom }) {
    function Changeview({ center, zoom }){
        const map = useMap();
        map.setView(center,zoom);
        return null;
    }

    return (
        <div className="Map">
            <LeafletMap center={center} zoom={zoom}>
                <Changeview center={center} zoom={zoom} />
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map
 