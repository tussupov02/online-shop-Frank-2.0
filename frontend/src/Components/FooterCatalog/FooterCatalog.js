import React from "react";
import "./FooterCatalog.css";
import { Link } from "react-router-dom";

const data = {
  nodes: [
    {
      id: "1",
      name: "Ванны",
      category: "1",
      nodes: [
        {
          category: "Ванны",
          id: "bath_1.1",
          name: "Акриловые",
          criteria:"Акрил"
        },
        {
          category: "Ванны",
          id: "bath_1.3",
          name: "Отдельностоящие",
          criteria:"Отдельностоящ"
        },
        {
          category: "Ванны",
          id: "bath_1.2",
          name: "Стальные",
          criteria:"Сатль"
        },
        {
          category: "Ванны",
          id: "bath_1.4",
          name: "Чугунные",
          criteria:"Чугун"
        },
      ],
    },
    {
      id: "2",
      name: "Смесители",
      category: "2/products",
      nodes: [
        {
          category: "Смесители",
          id: "faucets_1.1",
          name: "Душевые системы",
          criteria:"Душевая"
        },
        {
          category: "Смесители",
          id: "faucets_1.2",
          name: "Для раковины",
          criteria:"Раковина"
        },
        {
          category: "Смесители",
          id: "faucets_1.3",
          name: "Для ванны",
          criteria:"Ванн"
        },
        {
          category: "Смесители",
          id: "faucets_1.4",
          name: "Гигиенические души",
          criteria:"Гигиенический"
        },
        {
          category: "Смесители",
          id: "faucets_1.5",
          name: "Для биде",
          criteria:"Биде"
        },
        {
          category: "Смесители",
          id: "faucets_1.6",
          name: "Для кухни",
          criteria:"Кухня"
        },
        {
          category: "Смесители",
          id: "faucets_1.7",
          name: "Душевые стойки",
          criteria:"Стойка"
        },
      ],
    },
    {
      id: "3",
      name: "Унитазы и биде",
      category: "3/products",
      nodes: [
        {
          category: "Унитазы и биде",
          id: "toilets_1.1",
          name: "Подвесные",
          criteria:"Подвесной"
        },
        {
          category: "Унитазы и биде",
          id: "toilets_1.3",
          name: "Напольные",
          criteria:"Напольный"
        },
        {
          category: "Унитазы и биде",
          id: "toilets_1.2",
          name: "Импульсные",
          criteria:"Имульс"
        },
      ],
    },
    {
      id: "4",
      name: "Душевые кабины",
      category: "4/products",
      nodes: [
        {
          category: "Душевые кабины",
          id: "shower_1.1",
          name: "Душевые кабины",
          criteria:"Кабина"
        },
        {
          category: "Душевые кабины",
          id: "shower_1.3",
          name: "Душевые ограждения",
          criteria:"Ограждения"
        },
      ],
    },
    {
      id: "5",
      name: "Инсталляции",
      category: "5/products",
      nodes: [
        {
          category: "Инсталляции",
          id: "installations_172.1",
          name: "Для подвесных унитазов",
          criteria:"Подвесной"
        },
        {
          category: "Инсталляции",
          id: "installations_172.3",
          name: "Для биде",
          criteria:"Биде"
        },
        {
          category: "Инсталляции",
          id: "installations_172.2",
          name: "Для раковин",
          criteria:"Ракови"
        },
        {
          category: "Инсталляции",
          id: "installations_172.4",
          name: "Бачок скрытого монтажа",
          criteria:"Бачок"
        },
        {
          category: "Инсталляции",
          id: "installations_172.5",
          name: "Комплект инсталляции с унитазом",
          criteria:"Комплект инсталяц"
        },
      ],
    },
    {
      id: "6",
      name: "Мойки для кухни",
      category: "6/products",
      nodes: [
        {
          category: "Мойки для кухни",
          id: "sinks_1.1",
          name: "Под сольного монтажа",
          criteria:"Под сольного монтажа"
        },
        {
          category: "Мойки для кухни",
          id: "sinks_1.3",
          name: "Настольного монтажа",
          criteria:"Настольный"
        },
      ],
    },
    {
      id: "7",
      name: "Мебель для ванных комнат",
      category: "7/products",
      nodes: [
        {
          category: "Мебель для ванных комнат",
          id: "furniture_1.1",
          name: "Тумбы с раковиной",
          criteria:"Тумба с раковиной"
        },
        {
          category: "Мебель для ванных комнат",
          id: "furniture_1.3",
          name: "Зеркала",
          criteria:"Зеркало"
        },
        {
          category: "Мебель для ванных комнат",
          id: "furniture_1.2",
          name: "Пеналы",
          criteria:"Пенал"
        },
      ],
    },
    {
      id: "8",
      name: "Раковины",
      category: "8/products",
      nodes: [
        {
          category: "Раковины",
          id: "sinks_2.1",
          name: "На столешницу",
          criteria:"На столешницу"
        },
        {
          category: "Раковины",
          id: "sinks_2.3",
          name: "Под столешницу",
          criteria:"Под столешницу"
        },
      ],
    },
    {
      id: "9",
      name: "Аксессуары",
      category: "9/products",
      nodes: [
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.165",
          name: "Полотенцедержатели",
          criteria:"Полотенцедержатель"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.523",
          name: "Дозаторы",
          criteria:"Дозатор"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.275",
          name: "Ершики",
          criteria:"Ершик"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.1123",
          name: "Крючки",
          criteria:"Крючки"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.1989",
          name: "Держатели туалетной бумаги",
          criteria:"Держатель туалетной бумаги"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.3",
          name: "Полки",
          criteria:"Полка"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.2",
          name: "Мыльницы",
          criteria:"Мыльница"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.1212",
          name: "Стаканы",
          criteria:"Стакан"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.16554",
          name: "Сифоны",
          criteria:"Сифон"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.6875",
          name: "Лейки",
          criteria:"Лейка"
        },
        {
          category: "Аксессуары",
          id: "abc_172.22.22.214.if.2655",
          name: "Шланги",
          criteria:"Шланг"
        },
      ],
    },
  ],
};

const FooterCatalog = () => {
  return (
    <div className="footer_catalog">
      {data.nodes.map((category, i) => (
        <div key={i} className="footer_catalog_box">
          <div className="footer_catalog_name">
            <Link className="link_footer_catalog_name" to={`/category/${category.name}`}>
              {category.name}
            </Link>
          </div>
          <ul className="footer_catalog_content">
            {category.nodes.map((subCategory) => (
              <Link
              key={subCategory.id}
                className="link_footer_catalog_content"
                to={`/category/${subCategory.category}/${subCategory.criteria}`}
                >
                <li >{subCategory.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterCatalog;
