import React from 'react';
import {data_all, esporteId} from "../utils/data";
import {useParams} from "react-router";
import {Redirect} from "react-router-dom";
import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
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
  // const router = useIonRouter();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" slot="start">
            <IonBackButton defaultHref={`/${props.esporte}/quiz`}/>
          </IonButton>
          <IonTitle style={{ padding: '0' }}>Quiz {props.esporte}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {ended ? (
        <IonContent>
          <div style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <strong
                  style={{
                      fontSize: '2.9em',
                      paddingBottom: '1em',
                  }}>
                  Parabéns!
              </strong>
              <IonImg
                  src='../../public/trophy.png'
                  alt="Atleta correndo"
              />
              <p
                  style={{
                      paddingTop: '1em',
                      paddingBottom: '1em',
                      fontSize: '1.2em',
                  }}>
                      Você concluiu o quiz. <br /> Você acertou {score} de {question + 1} perguntas!
              </p>
              <IonButton
                  routerLink="/"
                  slot="end"
                  shape="round"
                  expand="block"
              >
                  <p style={{color:'white'}}>Voltar para tela inicial</p>
              </IonButton>
          </div>
        </IonContent>
      ) : (
        <IonContent>
          <h2 style={{ paddingLeft: "1em", paddingRight: "1em" }}>
            <Markdown>
              {data.perguntas[question].pergunta}
            </Markdown>
          </h2>
          <div style={{display: "flex", flexDirection: "column", width: "100vw", padding: "1em"}}>
            {data.perguntas[question].respostas.map((item, index) => (
              <IonButton
                style={{
                  justifyItems: "start",
                }}
                className="ion-text-wrap ion-float-left"

                key={index} onClick={() => {
                if (data?.perguntas[question].respostaCerta === index) {
                  setScore(score + 1)
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
          <div style={{ paddingRight: "1em", paddingLeft: "1em" }}>
            <h3>Acertos: {score} de {question}. </h3>
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
          </div>
        </IonContent>
      )}

    </IonPage>
  );
}

export default Quiz;
