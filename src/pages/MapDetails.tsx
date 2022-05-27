import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../Map.css';

import { MAPS } from './Maps';


mapboxgl.accessToken = 'pk.eyJ1IjoiaGVpZ29hbmt1aGluIiwiYSI6ImNrMzdkaDUwajAxM28zbXQzMzVsN3ZmYTMifQ.sYvJGkH3GHnNA3bnHoKGnA';
const MapDetails: React.FC = () => {

  const selectedMapId = useParams<{ mapId: string }>().mapId;

  const selectedMap = MAPS.find(m => m.id === selectedMapId);

  const mapContainerRef = useRef(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState<number>(5);
  const [lat, setLat] = useState<number>(34);
  const [zoom, setZoom] = useState<number>(1.5);

  useEffect(() => {
    if(map.current) return; // init once
    // Navigation control
      map.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: selectedMapId === 'map1' ? 'mapbox://styles/mapbox/streets-v11' : 'mapbox://styles/heigoankuhin/ck6rlknjj0iz11iocc6dco3cq',
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.resize();
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  }, );

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      // Set lat, lng and zoom variables to current map center when moving
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });

    useEffect(() => {
      // resize map on load
      if(!map.current) return; // wait for initialize
      map.current.on('load', () => {
        map.current.resize();

      });
    });



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'/>
          </IonButtons>
          <IonTitle>{selectedMap ? selectedMap.title : 'No location found!'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{selectedMap ? selectedMap.title : 'No location found!'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="sidebar">
             Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        <div className="map-container" ref={mapContainerRef} />
      </IonContent>
    </IonPage>
  );
};

export default MapDetails;
