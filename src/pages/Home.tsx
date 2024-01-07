import React from 'react';
import {IonContent, IonPage} from '@ionic/react';
import HomeLogo from '../components/HomeLogo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HomeLogo/>
      </IonContent>
    </IonPage>
  );
};

export default Home;

