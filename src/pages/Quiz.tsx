import React from 'react';
import {data_all, esporteId} from "../utils/data";
import {useParams} from "react-router";
import {Redirect} from "react-router-dom";
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter
} from "@ionic/react";
import Markdown from "react-markdown";

interface QuizProps {
  esporte: esporteId
}

interface ParamTypes {
  id: string
}

function Quiz(props: QuizProps) {
  const {id} = useParams<ParamTypes>();
  const data = data_all[props.esporte].quiz.find((item) => item.id === id);
  if (data === undefined) {
    console.warn(`Quiz: ${id} não encontrado`)
    return <Redirect to={`/${props.esporte}`}/>
  }
  const [question, setQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [ended, setEnded] = React.useState(false);
  const [usedTips, setUsedTips] = React.useState(false);
  const router = useIonRouter();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" slot="start">
            <IonBackButton defaultHref={`/${props.esporte}`}/>
          </IonButton>
          <IonTitle>Quiz {props.esporte}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {ended ? (
        <IonContent>
          <h2>Acabou!</h2>
          <h3>Score: {score}</h3>
        </IonContent>
      ) : (
        <IonContent>
          <h2>
            <Markdown>
              {data.perguntas[question].pergunta}
            </Markdown>
          </h2>
          <div style={{display: "flex", flexDirection: "column", width: "100vw"}}>
            {data.perguntas[question].respostas.map((item, index) => (
              <IonButton
                style={{
                  justifyItems: "start",
                }}
                className="ion-text-wrap ion-float-left"

                key={index} onClick={() => {
                if (data?.perguntas[question].respostaCerta === index) {
                  if (!usedTips) {
                    setScore(score + 2)
                  } else {
                    setScore(score + 1)
                  }
                }
                if (question + 1 < data.perguntas.length) {
                  setQuestion(question + 1)
                  setUsedTips(false)
                } else {
                  setEnded(true)
                }
              }}>
              <span
                style={{
                  marginRight: "1em",
                  border: "1px solid white",
                  backgroundColor: "white",
                  textAlign: "center",
                  padding: "0.5em",
                  fontWeight: "bold",
                  borderRadius: "15%",
                  color: "var(--ion-color-primary)",
                }}
                slot={"start"}
              >
                {String.fromCharCode(65 + index)}
              </span>
                <Markdown
                >
                  {item}
                </Markdown>
              </IonButton>
            ))}
          </div>
          <h3>Score: {score}</h3>
          {data.perguntas[question].dica !== undefined && !usedTips && (
            <IonButton onClick={()=> {
              setUsedTips(true)
            }}>
              Dica
            </IonButton>
          )}
          {data.perguntas[question].dica !== undefined && usedTips && (
            <div>
              Dica: {data.perguntas[question].dica!}
            </div>

          )}
        </IonContent>
      )}

    </IonPage>
  );
}

export default Quiz;
