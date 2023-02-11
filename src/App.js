import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

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
 