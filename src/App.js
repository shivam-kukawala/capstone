import logo from './logo.svg';
import Header from './components/Header';
import MarketHome from './components/MarketHome';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <MarketHome/>
          <Switch>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
