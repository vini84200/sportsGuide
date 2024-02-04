import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonMenu, IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {caretForwardOutline, chevronForwardCircleOutline, menu, pause} from "ionicons/icons";
import {useParams} from "react-router";
import {data_all, esporteId} from "../utils/data";
import {Redirect} from "react-router-dom";
import Markdown from "react-markdown";
import { red } from '@mui/material/colors';

interface ParamTypes {
  id: string
}

interface PraticaProps {
  esporte: esporteId
}

function Pratica(props: PraticaProps) {
  const {id} = useParams<ParamTypes>();
  const data = data_all[props.esporte].praticar.find((item) => item.id === id);
  if (data === undefined) {
    console.warn(`Pratica: ${id} não encontrado`)
    return <Redirect to={`/${props.esporte}`}/>
  }

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <IonPage id={"main-content"}>
        <IonHeader>
          <IonToolbar>
            <IonButton fill="clear" slot="start">
              <IonBackButton defaultHref={`/${props.esporte}/pratica`}/>
            </IonButton>
            <IonTitle style={{ padding: '0' }}>{data.nome}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div
            style={{
              padding: "1em",
              textAlign: "justify"
        }}>
            <embed src={data.video} width="100%" height="100%"/>
            <Markdown>
              {data.descricao}
            </Markdown>
          </div>

        </IonContent>
        <IonFooter>
          <IonToolbar>
            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {/* fill="clear" */}
              <IonButton routerLink="/fim_pratica"
                         slot="end"
                         shape="round"
                         expand="block"
              >
                <p style={{color:'white'}}>Concluir</p>
              </IonButton>
            </div>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
}

export default Pratica;
