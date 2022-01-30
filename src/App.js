import {BrowserRouter as Router,Switch,Route, BrowserRouter,Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourite from './components/Favourite';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/' exact render={(props)=>(
        <>
        <Banner {...props}/>
        <Movies {...props}/>
        </>
      )}/>
      <Route exact path='/favourites' component={Favourite} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
