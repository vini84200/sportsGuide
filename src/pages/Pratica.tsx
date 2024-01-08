import React from 'react';
import {
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
import {chevronForwardCircleOutline, menu, pause} from "ionicons/icons";
import {useParams} from "react-router";
import {data_all, esporteId} from "../utils/data";
import {Redirect} from "react-router-dom";
import Markdown from "react-markdown";

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
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton href={`/volei`}>
            Voltar
          </IonButton>
        </IonContent>
      </IonMenu>
      <IonPage id={"main-content"}>
        <IonHeader>
          <IonToolbar>
            <IonButton slot="start" fill="clear">
              <IonMenuButton >
                <IonIcon icon={menu}/>
              </IonMenuButton>
            </IonButton>
            <IonTitle>{data.nome}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>
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

              <IonButton onClick={() => {
              }} slot="end"
                         fill="clear"
                         shape="round"
              >
                <IonIcon icon={pause} style={
                  {fontSize: "3rem"}
                }/>
              </IonButton>
              <IonButton onClick={() => {
              }} slot="end"
                         fill="clear"
                         shape="round"
              >
                <IonIcon icon={chevronForwardCircleOutline} style={
                  {fontSize: "2rem"}
                }/>
              </IonButton>
            </div>

          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
}

export default Pratica;
