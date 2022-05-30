import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '../components/ExploreContainer.css';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <h2>Welcome to Mapify!</h2>
          <IonImg src = "https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_960_720.png"></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
