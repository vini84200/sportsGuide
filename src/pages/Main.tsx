import React from 'react';
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton, IonTitle,
  IonToolbar
} from "@ionic/react";


import {accessibility, help, library} from 'ionicons/icons';
import {data_all, EsporteData} from "../utils/data";


interface MainProps {
  esporte: 'volei' | 'futebol' | 'basquete';
}


function Aprender(props: { esporte: EsporteData }) {
  return (
    <div>
      {
        props.esporte.aprender.map((item) => (
          <IonItem key={item.id} href={`/volei/aprender/${item.id}`}>
            <IonIcon slot={"start"} icon={item.icon}/>
            <IonLabel>{item.nome}</IonLabel>
        </IonItem>
        ))
      }
    </div>
  )
}

function Pratica(props: { esporte: EsporteData }) {
  return (
    <div>
      {props.esporte.praticar?.map((item) => (
        <IonItem key={item.id} href={`/volei/pratica/${item.id}`}>
          <IonIcon slot={"start"} icon={item.icon}/>
          <IonLabel>{item.nome}</IonLabel>
        </IonItem>
      ))}
    </div>
  )
}

function Quiz(props: { esporte: EsporteData }) {
  return (
    <div>
      {props.esporte.quiz?.map((item) => (
        <IonItem key={item.id} href={`/volei/quiz/${item.id}`}>
          <IonIcon slot={"start"} icon={item.icon}/>
          <IonLabel>{item.nome}</IonLabel>
        </IonItem>
      ))}
    </div>
  )
}

function Main(props: MainProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = data_all[props.esporte];
  const [tab, setTab] = React.useState("aprender");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/*Go back*/}
          <IonButton routerLink="/home" slot="start" fill="clear">
            <IonBackButton defaultHref="/home"/>
          </IonButton>
          <IonTitle>{data.nome}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            marginRight: '2em',
            marginLeft: '2em',
          }}
        >
          {tab === "aprender" && (
            <Aprender esporte={data}/>
          )}
          {tab === "pratica" && (
            <Pratica esporte={data}/>
          )}
          {tab === "quiz" && (
            <Quiz esporte={data}/>
          )}
        </div>
      </IonContent>
      <IonTabBar slot="bottom" onIonTabsWillChange={e => setTab(e.detail.tab)}>

        <IonTabButton tab="aprender" selected={tab === "aprender"}>

          <IonIcon icon={library}/>
          <IonLabel>Aprender</IonLabel>
        </IonTabButton>

        <IonTabButton tab="pratica" selected={tab === "pratica"}>
          <IonIcon icon={accessibility}/>
          <IonLabel>Pratica</IonLabel>
        </IonTabButton>

        <IonTabButton tab="quiz" selected={tab === "quiz"}>
          <IonIcon icon={help}/>
          <IonLabel>Quiz</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
}

export default Main;
