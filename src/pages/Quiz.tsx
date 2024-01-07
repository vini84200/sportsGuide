import React from 'react';
import {data_all, esporteId} from "../utils/data";
import {useParams} from "react-router";
import {Redirect} from "react-router-dom";
import {IonButton, IonContent, IonHeader, IonPage, useIonRouter} from "@ionic/react";

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
  const router = useIonRouter();
  return (
    <IonPage>
      <IonHeader>
        <h1>Quiz {props.esporte}</h1>
      </IonHeader>
      {ended ? (
        <IonContent>
          <h2>Acabou!</h2>
          <h3>Score: {score}</h3>
          <IonButton onClick={() => {
            router.push(`/${props.esporte}`)
          }}>
            Voltar
          </IonButton>
        </IonContent>
        ) : (
      <IonContent>
        <h2>{data.perguntas[question].pergunta}</h2>
        <div>
          {data.perguntas[question].respostas.map((item, index) => (
            <IonButton onClick={() => {
              if (data?.perguntas[question].respostaCerta === index) {
                setScore(score + 1)
              }
              if (question + 1 < data.perguntas.length) {
                setQuestion(question + 1)
              } else {
                setEnded(true)
              }
            }}>{item}</IonButton>
          ))}
        </div>
        <h3>Score: {score}</h3>
      </IonContent>
        )}

    </IonPage>
  );
}

export default Quiz;
