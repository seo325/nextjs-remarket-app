import React from 'react'
import {Map ,MapMarker} from 'react-kakao-maps-sdk'
import { setConstantValue } from 'typescript';
interface KakaoMapProps {
    latitude: number;
    longitude: number;
    setCustomValue?: (id: string, value: number) => void;
    detailPage?: boolean
}
const handleclick =(mouseEvent: Kakao.maps.event.MouseEvent) =>{
    if (detailPage) return;
    setConstantValue('latitude',mouseEvent.latLng.getLat())
    setConstantValue('longitude',mouseEvent.latLng.getLng())
}
const KakaoMap = ({
    latitude,
    longitude,
    setCustomValue,
    detailPage = false
}) => {
    return (
        <Map
            center={{ lat: latitude, lng: longitude }}
            style={{ width: "100%", height: "360px" }}
            onClick= {(_, mouseEvent) =>handleclick(mouseEvent)}
        >
            <MapMarker position={{ lat:latitude, lng: longitude }}>
                <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
        </Map>
    )
}

export default KakaoMap