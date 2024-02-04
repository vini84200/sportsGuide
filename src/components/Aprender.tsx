import React from 'react';
import {useParams} from "react-router";
import {data_all, esporteId} from "../utils/data";
import {Redirect} from "react-router-dom";
import {IonBackButton, IonButton, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import Markdown from "react-markdown";

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
  const [content, setContent] = React.useState("");
  React.useEffect(() => {
    (async () => {
      setContent(await import(`../conteudo/${props.esporte}/aprender/${data.arquivo}.md?raw`
        ).then((module) => module.default))
    })()
  }, [data.arquivo])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" slot="start">
            <IonBackButton defaultHref={`/${props.esporte}/aprender`}/>
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
        <div style={{
          padding: "1em",
          textAlign: "justify"
        }}>
          <Markdown>
            {content}
          </Markdown>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Aprender;
