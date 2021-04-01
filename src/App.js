import logo from './logo.svg';
import Header from './components/Header';
import MarketHome from './components/MarketHome';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
          <Switch>
          <MarketHome/>
          </Switch>
        </Router>
    </div>
    </Provider>
  );
}

export default App;
