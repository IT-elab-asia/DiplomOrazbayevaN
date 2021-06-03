import React, { useState, useEffect } from "react";
import "../app.css";
import { db } from "../firebase";

// Импортирование всего необходимого

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // создание схемы(моделей) для БД

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Вы успешно забронировали 👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });


    setName("");
    setEmail("");
    setMessage("");
    // Запись схемы(моделей) в коллекцию contacts которая находится в БД
  };

  // Логика части приложения которая отправляет введенные данные в БД

  return (
    <div className="mainn">
    <form className="form" onSubmit={handleSubmit}>
      <h1>Бронирование 🤳</h1>

      <input
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " #139e93" }}
      >
        Забронировать
      </button>
    </form>
    </div>
  );
};

export default Contact;

// Страница бронирования
