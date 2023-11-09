import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ManageUser from './components/ManageUser';
function App() {
  return (
    <>
    <Router>
      <Routes>
      
        <Route path = {'/'} element = {<Home/>}></Route>
        <Route path = {'/manageUser'} element = {<ManageUser/>}></Route>
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
