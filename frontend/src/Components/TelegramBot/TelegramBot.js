import React, { useEffect, useState } from "react";
import "./TelegramBot.css";

function TelegramBot() {
  const TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;  
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [phoneError, setPhoneError] = useState("Телефон не может быть пустым");
  const [modalVisible, setModalVisible] = useState(false);

  const nameMandler = (e) => {
    const value = e.target.value.trim(); // Удаляем лишние пробелы в начале и в конце
    setName(value);

    if (!value) {
      setNameError("Имя не может быть пустым");
    } else if (!/^[а-яёa-z\s]+$/i.test(value)) {
      setNameError("Имя может содержать только буквы");
    } else {
      setNameError("");
    }
  };

  //валидация для номер тел
  const numberMandler = (e) => {
    setPhone(e.target.value);
    const re = /^\+?[78][-\(]?[7]\d{2}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setPhoneError("Некорректный номер телефона");
    } else {
      setPhoneError("");
    }
  };

  //валидация всей формы и для кнопки
  const [formValid, setformValid] = useState(false);
  useEffect(() => {
    if (phoneError || nameError) {
      setformValid(false);
    } else {
      setformValid(true);
    }
  }, [phoneError, nameError]);

  const btn = () => {
    fetch(URL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `<b>Новая заявка!</b> \n <b>Имя: </b>${name} \n <b>Номер: </b>${phone}`,
        parse_mode: "html",
      }),
    })
    .then((res) => {
      // Проверяем статус ответа
      if (res.ok) {
        // Открываем модальное окно при успешной отправке
        setModalVisible(true);
        // Закрываем модальное окно через 1 секунду
        setTimeout(() => {
          setModalVisible(false);
          // Сбрасываем значения инпутов
          setName("");
          setPhone("");
        }, 700);
      } else {
        // В случае ошибки выводим сообщение в консоль
        console.error("Ошибка при отправке сообщения:", res.status);
      }
    })
    .catch((error) => {
      // В случае ошибки выводим сообщение в консоль
      console.error("Ошибка при отправке сообщения:", error);
      // Здесь можно предпринять дополнительные действия, например, отображение сообщения для пользователя
    });
  };

  

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  return (
    <div className="form">
      <h3 className="form_title">Нужна консультация?</h3>
      <form action="" className="form_main">
        <label htmlFor="">
          <h4>Напишите свое имя</h4>
          <input
            value={name}
            onChange={(e) => nameMandler(e)}
            type="text"
            name="name"
            placeholder="Ваше имя"
            onBlur={(e) => blurHandler(e)}
          />
          {nameDirty && nameError && (
            <div className="errorForm">{nameError}</div>
          )}
        </label>
        <label htmlFor="">
          <h4>Введите ваш телефон</h4>
          <input
            value={phone}
            onChange={(e) => numberMandler(e)}
            type="text"
            name="phone"
            id=""
            placeholder="+7 (705) 880-68-68"
            onBlur={(e) => blurHandler(e)}
          />
          {phoneDirty && phoneError && (
            <div className="errorForm">{phoneError}</div>
          )}
        </label>
        <button disabled={!formValid} type="button" onClick={btn}>
          Отправить
        </button>
      </form>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>Ваше сообщение было успешно отправлено!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TelegramBot;
