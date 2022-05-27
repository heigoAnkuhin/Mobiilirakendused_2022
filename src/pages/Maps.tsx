import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

export const MAPS = [
  { id: 'map1', title: 'Regular map' },
  { id: 'map2', title: '3D Satellite Map with Road Network data' },
];

const Maps: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Maps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Maps</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          {MAPS.map(map => (
            <IonRow key={map.id}>
              <IonCol size-md="4" offset-md="4">
                <IonCard>
                  <IonCardContent className="ion-text-center">
                    <h2>{map.title}</h2>
                    <IonButton routerLink={`/maps/${map.id}`}>
                      View Map
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Maps;
