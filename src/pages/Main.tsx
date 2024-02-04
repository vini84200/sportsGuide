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
  tab: 'aprender' | 'pratica' | 'quiz';
}


function Aprender(props: { esporte: EsporteData }) {
  return (
    <div style={{ padding: "1em 0" }} >
      {
        props.esporte.aprender.map((item) => (
          <div style={{ padding: "0.5em 0" }}>
            <IonItem key={item.id} href={`/${props.esporte.id}/aprender/${item.id}`}>
              <p
                style={{
                        textAlign: 'center',
                        fontWeight: '500',
                        width: '100%',
                        padding: "0 0.5em",
                }}>{item.nome}</p>
            </IonItem>
          </div>
        ))
      }
    </div>
  )
}

function Pratica(props: { esporte: EsporteData }) {
  return (
    <div style={{ padding: "1em 0" }} >
      {props.esporte.praticar?.map((item) => (
        <div style={{ padding: "0.5em 0" }}>
          <IonItem key={item.id} href={`/${props.esporte.id}/pratica/${item.id}`}>
            <p
              style={{
                      textAlign: 'center',
                      fontWeight: '500',
                      width: '100%',
                      padding: "0 0.5em",
              }}>{item.nome}</p>
          </IonItem>
        </div>
      ))}
    </div>
  )
}

function Quiz(props: { esporte: EsporteData }) {
  return (
    <div style={{ padding: "1em 0" }} >
      {props.esporte.quiz?.map((item) => (
        <div style={{ padding: "0.5em 0" }}>
          <IonItem key={item.id} href={`/${props.esporte.id}/quiz/${item.id}`}>
            <p
              style={{
                      textAlign: 'center',
                      fontWeight: '500',
                      width: '100%',
                      padding: "0 0.5em",
              }}>{item.nome}</p>
          </IonItem>
        </div>
      ))}
    </div>
  )
}

function Main(props: MainProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = data_all[props.esporte];

  const currentTab = props.tab ? props.tab : "aprender";

  const [tab, setTab] = React.useState(currentTab);

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
