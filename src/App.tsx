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
import Pratica from './pages/Pratica';
import FimPratica from './pages/FimPratica';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home/>
        </Route>

        <Route exact path="/volei">
          <Main esporte='volei' tab='aprender'/>
        </Route>
        <Route exact path="/volei/aprender">
          <Main esporte='volei' tab='aprender'/>
        </Route>
        <Route exact path="/volei/aprender/:id">
          <Aprender esporte='volei' />
        </Route>
        <Route exact path="/volei/quiz">
          <Main esporte='volei' tab='quiz'/>
        </Route>
        <Route exact path="/volei/quiz/:id">
          <Quiz esporte='volei'/>
        </Route>
        <Route exact path="/volei/pratica">
          <Main esporte='volei' tab='pratica'/>
        </Route>
        <Route exact path="/volei/pratica/:id">
          <Pratica esporte='volei'/>
        </Route>

        <Route exact path="/futebol">
          <Main esporte='futebol' tab='aprender' />
        </Route>
        <Route exact path="/futebol/aprender">
          <Main esporte='futebol' tab='aprender' />
        </Route>
        <Route exact path="/futebol/aprender/:id">
          <Aprender esporte='futebol' />
        </Route>
        <Route exact path="/futebol/quiz">
          <Main esporte='futebol' tab='quiz'/>
        </Route>
        <Route exact path="/futebol/quiz/:id">
          <Quiz esporte='futebol'/>
        </Route>
        <Route exact path="/futebol/pratica">
          <Main esporte='futebol' tab='pratica'/>
        </Route>
        <Route exact path="/futebol/pratica/:id">
          <Pratica esporte='futebol'/>
        </Route>

        <Route exact path="/basquete">
          <Main esporte='basquete' tab='aprender' />
        </Route>
        <Route exact path="/basquete/aprender">
          <Main esporte='basquete' tab='aprender' />
        </Route>
        <Route exact path="/basquete/aprender/:id">
          <Aprender esporte='basquete' />
        </Route>
        <Route exact path="/basquete/quiz">
          <Main esporte='basquete' tab='quiz'/>
        </Route>
        <Route exact path="/basquete/quiz/:id">
          <Quiz esporte='basquete'/>
        </Route>
        <Route exact path="/basquete/pratica">
          <Main esporte='basquete' tab='pratica'/>
        </Route>
        <Route exact path="/basquete/pratica/:id">
          <Pratica esporte='basquete'/>
        </Route>

        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route>
          <FimPratica />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
