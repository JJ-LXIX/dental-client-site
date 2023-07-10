"use client";

import React from "react";
import maplibregl from "maplibre-gl";
import Map, { NavigationControl, Marker } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function MapComponent({}) {
  return (
    <div className="w-[80%] mx-auto md:w-full h-screen md:h-[50vh] lg:h-[70vh]  relative shadow-lg rounded-2xl overflow-hidden border-2 border-white p-2">
      <Map
        mapLib={maplibregl}
        className="absolute inset-0 p-2 rounded-2xl"
        initialViewState={{
          longitude: 78.041,
          latitude: 27.17115,
          zoom: 14,
        }}
        style={{ borderRadius: "10px" }}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=vF9I9gEjq30xZHr86gew"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={78.042} latitude={27.173} color="red" />
      </Map>
    </div>
  );
}

export default MapComponent;
