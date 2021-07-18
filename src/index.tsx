import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import "./i18nextConf";
import Cookies from 'universal-cookie';
import i18next from "i18next";

const cookies = new Cookies();
const cookielang = cookies.get("WELBLang") || window.localStorage.i18nextLng;
if(cookielang){
    i18next.changeLanguage(cookielang);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
