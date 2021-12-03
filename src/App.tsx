import React,{ChangeEvent,FC ,useState ,useEffect} from 'react';
import './App.css';
import data from './data/messages.json'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Message } from './components/Message';
import { IEMAIL } from './components/Interface';




const App :FC<{}> = () => {
  const [listDataEmail , setListDataEmail] = useState<IEMAIL[]>(
    [...data].filter((mail)=>{
          return mail.to === "myself@angular.dev";
        })
    )


  const onChangeUser = (e: ChangeEvent<HTMLSelectElement>) => {
    let newList = [...data];

    setListDataEmail(
      newList.filter((mail)=>{
        return mail.to === e.target.value;
      })
    )
  }
 

  return (
    <div className="App">
      <Router>
      <div>
        <nav className="d-flex justify-content-between p-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Message</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/preference">Preference</Link>
          </li>
        </ul>
        <div>
          <select onChange={(e) => onChangeUser(e)}>
          
            <option selected value="myself@angular.dev">myself@angular.dev</option>
            <option value="devguy@angular.dev">devguy@angular.dev</option>
            <option value="devgal@angular.dev">devgal@angular.dev</option>
          </select>
          <button type="button" className="btn btn-primary"><i className="fas fa-home"></i></button>&nbsp;
          <button type="button" className="btn btn-primary"><i className="fas fa-envelope"></i>&nbsp;New Massage</button>
        </div>
        </nav>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/preference" element={<Preference />} />
          <Route path="/*" element={<Message listDataEmail={listDataEmail}/>} />
         
        </Routes>
      </div>
    </Router>

    

    
    </div>
  );
}
function Contact() {
  return <h2>This page is under construction</h2>;
}
function Preference() {
  return <h2>This page is under construction</h2>;
}
function Test() {
  return <h2>test</h2>;
}

export default App;
