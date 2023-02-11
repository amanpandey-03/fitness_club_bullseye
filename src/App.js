import './App.css';
// import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

// import CRUD from './components/CRUD';

import {HashRouter,Route,Routes} from 'react-router-dom'; 

function App() {
  return (
    
    <HashRouter>
    <div className="form">
        <Routes>
          <Route path='/'  element={ <AddUser/> }/>
          <Route path='/UserList'  element={ <UserList/> }/>
        </Routes>
    </div>
    </HashRouter>
  ); 
}
export default App;
 