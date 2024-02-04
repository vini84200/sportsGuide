import React from 'react';
import './ExploreContainer.css';
import {IonButton} from "@ionic/react";
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

interface ContainerProps { }

const HomeLogo: React.FC<ContainerProps> = () => {
  return (
    <div id="container" style={{
      marginRight: '2em',
      marginLeft: '2em',
    }}>
      <strong
        style={{
          fontSize: '2em',
          display: 'block',
          marginBottom: '4em',
          textAlign: 'center',
        }}
      >SportsGuide</strong>
      <IonButton routerLink="/volei" expand="block">
        <div
          style={{
            display: 'flex',
            width: '40%',
            justifyContent: 'center',
        }}>
          <SportsVolleyballIcon />
          <p style={{ color: 'white', marginLeft: '0.5em' }}>Voleibol</p>
        </div>
      </IonButton>
      <IonButton routerLink="/futebol" expand="block">
        <div
          style={{
            display: 'flex',
            width: '40%',
            justifyContent: 'center',
        }}>
          <SportsSoccerIcon />
          <p style={{ color: 'white', marginLeft: '0.5em' }}>Futebol</p>
        </div>
      </IonButton>
      <IonButton routerLink="/basquete" expand="block">
        <div
          style={{
            display: 'flex',
            width: '40%',
            justifyContent: 'center',
        }}>
          <SportsBasketballIcon />
          <p style={{ color: 'white', marginLeft: '0.5em' }}>Basquete</p>
        </div>
      </IonButton>
    </div>
  );
};

export default HomeLogo;
