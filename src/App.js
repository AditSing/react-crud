// import logo from './logo.svg';
// import './App.css';
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter basename="/crud-mern">
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />}/>
          <Route path="add" element={<AddUser />}/>
          <Route path="edit/:id" element={<EditUser />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
