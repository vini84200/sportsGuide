import { IonBackButton, IonButton, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from "@ionic/react";

function FimPratica() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                {/*Go back*/}
                <IonButton routerLink="/home" slot="start" fill="clear">
                    <IonBackButton defaultHref="/home"/>
                </IonButton>
                <IonTitle>Fim de Prática</IonTitle>
                </IonToolbar>
            </IonHeader>
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
                        src='/athlete.png'
                        alt="Atleta correndo"
                    />
                    <p
                        style={{
                            paddingTop: '1em',
                            paddingBottom: '1em',
                            fontSize: '1.2em',
                        }}>
                            Você concluiu sua prática.
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
        </IonPage>
    )
}

export default FimPratica;