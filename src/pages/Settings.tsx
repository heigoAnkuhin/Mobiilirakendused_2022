import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonToggle, IonIcon, IonLabel, IonItem, IonList } from '@ionic/react';
import { moon } from "ionicons/icons";
import { useEffect, useState } from 'react';


const Settings: React.FC = () => {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    
    if (isChecked === false) {
      document.body.classList.toggle("dark", false);

    }
    else {
      document.body.classList.toggle("dark", true);

    }
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Theme Settings</h2>
        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={moon}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              checked={isChecked}
              onIonChange={() => setIsChecked(isChecked => !isChecked)}
            ></IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
