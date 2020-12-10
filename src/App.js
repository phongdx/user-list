import UserDashboard from './pages/UserDashboard';
import  UserDetail from './pages/UserDetail';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UserDashboard} />
          <Route path="/user/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
