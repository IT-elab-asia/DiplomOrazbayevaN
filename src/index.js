import React from 'react';
// Импорт библиотеки Реакт
import ReactDOM from 'react-dom';
// Импорт библиотеки реакт дом
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
// Импорт библиотек реакт роутер дом для создания ссылок
import App from './App';
import Contact from './components/Contact';
// Импорт страницы бронирования для создания ссылки для нее
import Home from './components/Home';
// Импорт главной страницы для создания ссылки для нее

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Redirect from='/' to='/home' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// Система создания ссылок разделов сайта(роутинг)