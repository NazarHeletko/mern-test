import React from 'react'
import './App.css'
import Header from "./components/Header/Header"
import {Users} from "./components/Users/Users";
import { useSelector} from "react-redux";
import {Groups} from "./components/Groups/Groups";



function App() {
    const page = useSelector(state => state.page.activePage)
    return (

            <div className="App">
                <Header/>
                {page === 'users' && <Users/>}
                {page === 'groups' && <Groups/>}
            </div>

    );
}

export default App;
