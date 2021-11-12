
import SignIn from './MainCompo/SignIn';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from './MainCompo/Signup';
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/">
          <Signup/>
        </Route>
        <Route exact path ="/signin" component = {SignIn}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
