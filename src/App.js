import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
function App() {
  return (
    <>
    <Router>
      <Routes>
      
        <Route path = {'/'} element = {<Home/>}></Route>
        <Route path = {'/addUser'} element = {<AddUser/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
