import React from 'react';
import {useParams} from "react-router";
import {data_all, esporteId} from "../utils/data";
import {Redirect} from "react-router-dom";
import {IonBackButton, IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";

interface ParamTypes {
  id: string
}

interface AprenderProps {
  esporte: esporteId
}

function Aprender(props: AprenderProps) {
  const {id} = useParams<ParamTypes>();
  const data = data_all[props.esporte].aprender.find((item) => item.id === id);
  if (data === undefined) {
    console.warn(`Aprender: ${id} não encontrado`)
    return <Redirect to={`/${props.esporte}`}/>
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" slot="start"
          >
            <IonBackButton defaultHref={`/${props.esporte}`}/>
          </IonButton>
          <IonTitle>
            {data.nome}
          </IonTitle>
          <IonLabel>
            Aprender {props.esporte}
          </IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p style={{
          padding: "1em",
          textAlign: "justify"
        }}>{data.texto}</p>
      </IonContent>
    </IonPage>
  );
}

export default Aprender;
