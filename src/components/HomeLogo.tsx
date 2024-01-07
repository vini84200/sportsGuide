import React from 'react';
import './ExploreContainer.css';
import {IonButton} from "@ionic/react";

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
      >Sports Guide</strong>
      <IonButton routerLink="/volei" expand="block">Volêibol</IonButton>
      <IonButton routerLink="/futebol" expand="block">Futebol</IonButton>
      <IonButton routerLink="/basquete" expand="block">Basquete</IonButton>
    </div>
  );
};

export default HomeLogo;
