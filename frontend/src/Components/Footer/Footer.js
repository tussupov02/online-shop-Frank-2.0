import React from "react";
import "./Footer.css";

function Footer() {
  const data = {
    nodes: [
      {
        id: "bath_1",
        name: "Ванны",
        nodes: [
          {
            id: "bath_1.1",
            name: "Акриловые",
          },
          {
            id: "bath_1.3",
            name: "Отдельностоящие",
          },
          {
            id: "bath_1.2",
            name: "Стальные",
          },
          {
            id: "bath_1.4",
            name: "Чугунные",
          },
        ],
      },
      {
        id: "faucets_1",
        name: "Смесители",
        nodes: [
          {
            id: "faucets_1.1",
            name: "Душевые системы",
          },
          {
            id: "faucets_1.2",
            name: "Для раковины",
          },
          {
            id: "faucets_1.3",
            name: "Для ванны",
          },
          {
            id: "faucets_1.4",
            name: "Гигиенические души",
          },
          {
            id: "faucets_1.5",
            name: "Для биде",
          },
          {
            id: "faucets_1.6",
            name: "Для кухни",
          },
          {
            id: "faucets_1.7",
            name: "Душевые стойки",
          },
        ],
      },
      {
        id: "toilets_1",
        name: "Унитазы и биде",
        nodes: [
          {
            id: "toilets_1.1",
            name: "Подвесные",
          },
          {
            id: "toilets_1.3",
            name: "Напольные",
          },
          {
            id: "toilets_1.2",
            name: "Импульсные",
          },
        ],
      },
      {
        id: "shower_1",
        name: "Душевые кабины",
        nodes: [
          {
            id: "shower_1.1",
            name: "Душевые кабины",
          },
          {
            id: "shower_1.3",
            name: "Душевые ограждения",
          },
        ],
      },
      {
        id: "installations_172",
        name: "Инсталляции",
        nodes: [
          {
            id: "installations_172.1",
            name: "Для подвесных унитазов",
          },
          {
            id: "installations_172.3",
            name: "Для биде",
          },
          {
            id: "installations_172.2",
            name: "Для раковин",
          },
          {
            id: "installations_172.4",
            name: "Бачок скрытого монтажа",
          },
          {
            id: "installations_172.5",
            name: "Комплект инсталляции с унитазом",
          },
        ],
      },
      {
        id: "sinks_1",
        name: "Мойки для кухни",
        nodes: [
          {
            id: "sinks_1.1",
            name: "Подсольного монтажа",
          },
          {
            id: "sinks_1.3",
            name: "Настольного монтажа",
          },
        ],
      },
      {
        id: "furniture_1",
        name: "Мебель для ванных комнат",
        nodes: [
          {
            id: "furniture_1.1",
            name: "Тумбы с раковиной",
          },
          {
            id: "furniture_1.3",
            name: "Зеркала",
          },
          {
            id: "furniture_1.2",
            name: "Пеналы",
          },
        ],
      },
      {
        id: "sinks_2",
        name: "Раковины",
        nodes: [
          {
            id: "sinks_2.1",
            name: "На столешницу",
          },
          {
            id: "sinks_2.3",
            name: "Под столешницу",
          },
        ],
      },
      {
        id: "abc_172.22.22.214",
        name: "Аксессуары",
        nodes: [
          {
            id: "abc_172.22.22.214.if.1",
            name: "Полотенцедержатели",
          },
          {
            id: "abc_172.22.22.214.if.3",
            name: "Дозаторы",
          },
          {
            id: "abc_172.22.22.214.if.2",
            name: "Ершики",
          },
          {
            id: "abc_172.22.22.214.if.1",
            name: "Крючки",
          },
          {
            id: "abc_172.22.22.214.if.1",
            name: "Держатели туалетной бумаги",
          },
          {
            id: "abc_172.22.22.214.if.3",
            name: "Полки",
          },
          {
            id: "abc_172.22.22.214.if.2",
            name: "Мыльницы",
          },
          {
            id: "abc_172.22.22.214.if.1",
            name: "Стаканы",
          },
          {
            id: "abc_172.22.22.214.if.1",
            name: "Сифоны",
          },
          {
            id: "abc_172.22.22.214.if.3",
            name: "Лейки",
          },
          {
            id: "abc_172.22.22.214.if.2",
            name: "Шланги",
          },
        ],
      },
    ],
  };
  return (
    <footer className="footer">
      {/* <div className="footer_logo"><img src="./img/logo.png" alt="" /></div> */}
      <p>Соц сети</p>
    </footer>
  );
}

export default Footer;
