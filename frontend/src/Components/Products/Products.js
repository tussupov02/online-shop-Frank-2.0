import React, { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const TOKEN = "7091557275:AAHb2c1GATD4_tS-Wc7nJbrGFQ9Z18w0Pco";
  const CHAT_ID = "-4167156592";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDes2cription] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [phoneError, setPhoneError] = useState("Телефон не может быть пустым");

  //валидация для имени
  const nameMandler = (e) => {
    setName(e.target.value);
    // const re = /^([а-я]{1}[а-яё]{2,23}|[a-z]{1}[a-z]{2,23})$/;
    if (name.length<1) {
      setNameError("Некоректное имя");
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
        console.log("URAAAA" + res);
      })
      .catch((err) => {
        console.warn("NOOOO" + err);
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
          {nameDirty && nameError && <div className="errorForm">{nameError}</div>}
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
    </div>
  );
}

export default Products;
