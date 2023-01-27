import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  './styles/logo.css';

import SearchComponent from './components/SearchComponent.js';
import CardListComponents from './components/CardListComponents';
import EmptyComponent from './components/EmptyComponent';

import { AppProvider } from './context.js';

import brewLogo from "./images/breww.svg";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <div className='logo'>
      <img className='img' src={brewLogo}/>
    </div>
    <div id="bodyDiv" style={{margin:"78px 100px"}}>
      <SearchComponent></SearchComponent>
      <CardListComponents></CardListComponents>
      {/* <EmptyComponent></EmptyComponent> */}
    </div>
    {/* <FooterComponent></FooterComponent> */}
    </AppProvider>

);


