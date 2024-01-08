import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Main from "./pages/Main";
import Aprender from "./components/Aprender";
import Quiz from "./pages/Quiz";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/volei">
          <Route exact path="">
            <Main esporte='volei'/>
          </Route>
        </Route>
        <Route exact path="/volei/aprender/:id">
          <Aprender esporte='volei' />
        </Route>
        <Route exact path="/volei/pratica">
          <img src={"https://pa1.narvii.com/6425/9c9760bfcfde6ac7940292ae3855a3fc3e8e561c_hq.gif"} alt={"gif"}/>
        </Route>
        <Route exact path="/volei/quiz/:id">
          <Quiz esporte='volei'/>
        </Route>

        <Route exact path="/futebol">
          <Main esporte='futebol'/>
        </Route>
        <Route exact path="/basquete">
          <Main esporte='basquete'/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
