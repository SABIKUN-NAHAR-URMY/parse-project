import './App.css';
import Login from './components/Login';
import { initializeParse } from '@parse/react';
import Sample from './components/Sample';
import Signup from './components/Signup';
import Fields from './components/Fields';

initializeParse(
  'https://pg-app-kcrseitwpvzq1edkvigw0v0cs7ysyu.scalabl.cloud/1/',
  'EnNhT1vXO79VEyFJ3NdrIcr7S4q54NUPsNBmhFfU',
  's6qZWu7I4B9Nyxxt9Bvdeqn0UUN46LMUmWPfhS4s'
);

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <Sample></Sample> */}
      <Fields></Fields>
    </div>
  );
}

export default App;
