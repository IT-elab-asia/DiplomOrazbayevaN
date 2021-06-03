import React from "react";
// Импорт библиотеки Реакт
import Contact from "./components/Contact";
// Импорт страницы юронирования для включения ее в структуру главного файла
import "./app.css";
// Импорт css
import Home from "./components/Home";
// Импорт главной страницы для включения ее в структуру главного файла

function App() {
  // Создание функции
  return (
    <div className="app">
      <Home />
      <Contact />
    </div>
  );
}

export default App;

// Главный наш файл который генерирует строение веб сайта
