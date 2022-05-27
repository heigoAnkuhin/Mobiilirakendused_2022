import React from 'react';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { home, map } from 'ionicons/icons';

import Maps from './Maps';
import MapDetails from './MapDetails';
import Home from './Home';

const MapTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet >
        <Redirect path='/maps' to='/maps/list' exact />
        <Switch>
          <Route exact path="/maps/list">
            <Maps />
          </Route>
          <Route exact path="/maps/home">
            <Home />
          </Route>
          <Route path="/maps/:mapId">
            <MapDetails />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='home' href='/maps/home'>
          <IonIcon icon={home}/>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab='maps' href='/maps/list'>
          <IonIcon icon={map}/>
          <IonLabel>Maps</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>    
  );
};

export default MapTabs;
