// import React, { useState } from "react";
// import "./HeaderCatalog.css";
// import { Link } from "react-router-dom";
// // const Router = ReactRouterDOM.BrowserRouter;
// // const Route = ReactRouterDOM.Route;
// // const Routes = ReactRouterDOM.Routes;
// // const Link = ReactRouterDOM.Link;

// const data = {
//   nodes: [
//     {
//       id: "1",
//       name: "Ванны",
//       category: '1',
//       nodes: [
//         {
//           id: "bath_1.1",
//           name: "Акриловые",
//         },
//         {
//           id: "bath_1.3",
//           name: "Отдельностоящие",
//         },
//         {
//           id: "bath_1.2",
//           name: "Стальные",
//         },
//         {
//           id: "bath_1.4",
//           name: "Чугунные",
//         },
//       ],
//     },
//     {
//       id: "2",
//       name: "Смесители",
//       category: '2/products',
//       nodes: [
//         {
//           id: "faucets_1.1",
//           name: "Душевые системы",
//         },
//         {
//           id: "faucets_1.2",
//           name: "Для раковины",
//         },
//         {
//           id: "faucets_1.3",
//           name: "Для ванны",
//         },
//         {
//           id: "faucets_1.4",
//           name: "Гигиенические души",
//         },
//         {
//           id: "faucets_1.5",
//           name: "Для биде",
//         },
//         {
//           id: "faucets_1.6",
//           name: "Для кухни",
//         },
//         {
//           id: "faucets_1.7",
//           name: "Душевые стойки",
//         },
//       ],
//     },
//     {
//       id: "3",
//       name: "Унитазы и биде",
//       category: '3/products',
//       nodes: [
//         {
//           id: "toilets_1.1",
//           name: "Подвесные",
//         },
//         {
//           id: "toilets_1.3",
//           name: "Напольные",
//         },
//         {
//           id: "toilets_1.2",
//           name: "Импульсные",
//         },
//       ],
//     },
//     {
//       id: "4",
//       name: "Душевые кабины",
//       category: '4/products',
//       nodes: [
//         {
//           id: "shower_1.1",
//           name: "Душевые кабины",
//         },
//         {
//           id: "shower_1.3",
//           name: "Душевые ограждения",
//         },
//       ],
//     },
//     {
//       id: "5",
//       name: "Инсталляции",
//       category: '5/products',
//       nodes: [
//         {
//           id: "installations_172.1",
//           name: "Для подвесных унитазов",
//         },
//         {
//           id: "installations_172.3",
//           name: "Для биде",
//         },
//         {
//           id: "installations_172.2",
//           name: "Для раковин",
//         },
//         {
//           id: "installations_172.4",
//           name: "Бачок скрытого монтажа",
//         },
//         {
//           id: "installations_172.5",
//           name: "Комплект инсталляции с унитазом",
//         },
//       ],
//     },
//     {
//       id: "6",
//       name: "Мойки для кухни",
//       category: '6/products',
//       nodes: [
//         {
//           id: "sinks_1.1",
//           name: "Подсольного монтажа",
//         },
//         {
//           id: "sinks_1.3",
//           name: "Настольного монтажа",
//         },
//       ],
//     },
//     {
//       id: "7",
//       name: "Мебель для ванных комнат",
//       category: '7/products',
//       nodes: [
//         {
//           id: "furniture_1.1",
//           name: "Тумбы с раковиной",
//         },
//         {
//           id: "furniture_1.3",
//           name: "Зеркала",
//         },
//         {
//           id: "furniture_1.2",
//           name: "Пеналы",
//         },
//       ],
//     },
//     {
//       id: "8",
//       name: "Раковины",
//       category: '8/products',
//       nodes: [
//         {
//           id: "sinks_2.1",
//           name: "На столешницу",
//         },
//         {
//           id: "sinks_2.3",
//           name: "Под столешницу",
//         },
//       ],
//     },
//     {
//       id: "9",
//       name: "Аксессуары",
//       category: '9/products',
//       nodes: [
//         {
//           id: "abc_172.22.22.214.if.1",
//           name: "Полотенцедержатели",
//         },
//         {
//           id: "abc_172.22.22.214.if.3",
//           name: "Дозаторы",
//         },
//         {
//           id: "abc_172.22.22.214.if.2",
//           name: "Ершики",
//         },
//         {
//           id: "abc_172.22.22.214.if.1",
//           name: "Крючки",
//         },
//         {
//           id: "abc_172.22.22.214.if.1",
//           name: "Держатели туалетной бумаги",
//         },
//         {
//           id: "abc_172.22.22.214.if.3",
//           name: "Полки",
//         },
//         {
//           id: "abc_172.22.22.214.if.2",
//           name: "Мыльницы",
//         },
//         {
//           id: "abc_172.22.22.214.if.1",
//           name: "Стаканы",
//         },
//         {
//           id: "abc_172.22.22.214.if.1",
//           name: "Сифоны",
//         },
//         {
//           id: "abc_172.22.22.214.if.3",
//           name: "Лейки",
//         },
//         {
//           id: "abc_172.22.22.214.if.2",
//           name: "Шланги",
//         },
//       ],
//     },
//   ],
// };

// class HeaderCatalog extends React.Component {
//   state = {
//     data: data,
//     displayChild: null,
//   };
//   render() {
//     const check = (el) => {
//       this.expandParent(el);
//     };
//     return (
//       <div className="showCatalog">
//         {this.state.data.nodes.map((element) => (
//           <div
//             key={element.id}
//             onMouseOver={() => check(element.id)}
//             className="showCatalog_box"
//           >
//             <div className="showCatalog_name">
//               <Link className="link_main" to={`/category/${element.id}`}>
//                 {element.name}
//               </Link>
//             </div>
//             <div className="showCatalog_content">
//               {element.id === this.state.displayChild &&
//                 element.nodes &&
//                 this._renderChildren(element.nodes)}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   _renderChildren = (nodes) => {
//     const result = nodes.map((el) => {
//       return (
//         <Link className="link" to={`product/${el.id}`} key={el.id}>
//           {" "}
//           {el.name}{" "}
//         </Link>
//       );
//     });

//     return <ul>{result}</ul>;
//   };

//   expandParent = (id) => {
//     this.setState({
//       displayChild: id,
//     });
//   };
// }

// export default HeaderCatalog;

import React, { useState } from "react";
import "./HeaderCatalog.css";
import { Link } from "react-router-dom";
import HeaderCatalogItem from "./HeaderCatalogItem";
// const Router = ReactRouterDOM.BrowserRouter;
// const Route = ReactRouterDOM.Route;
// const Routes = ReactRouterDOM.Routes;
// const Link = ReactRouterDOM.Link;

const nodes = [
  {
    id: "1",
    name: "Ванны",
    category: "1",
    nodes: [
      {
        category: "Ванны",
        id: "bath_1.1",
        name: "Акриловые",
      },
      {
        category: "Ванны",
        id: "bath_1.3",
        name: "Отдельностоящие",
      },
      {
        category: "Ванны",
        id: "bath_1.2",
        name: "Стальные",
      },
      {
        category: "Ванны",
        id: "bath_1.4",
        name: "Чугунные",
      },
    ],
  },
  {
    id: "2",
    name: "Смесители",
    category: "2/products",
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
    id: "3",
    name: "Унитазы и биде",
    category: "3/products",
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
    id: "4",
    name: "Душевые кабины",
    category: "4/products",
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
    id: "5",
    name: "Инсталляции",
    category: "5/products",
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
    id: "6",
    name: "Мойки для кухни",
    category: "6/products",
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
    id: "7",
    name: "Мебель для ванных комнат",
    category: "7/products",
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
    id: "8",
    name: "Раковины",
    category: "8/products",
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
    id: "9",
    name: "Аксессуары",
    category: "9/products",
    nodes: [
      {
        id: "abc_172.22.22.214.if.165",
        name: "Полотенцедержатели",
      },
      {
        id: "abc_172.22.22.214.if.523",
        name: "Дозаторы",
      },
      {
        id: "abc_172.22.22.214.if.275",
        name: "Ершики",
      },
      {
        id: "abc_172.22.22.214.if.1123",
        name: "Крючки",
      },
      {
        id: "abc_172.22.22.214.if.1989",
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
        id: "abc_172.22.22.214.if.1212",
        name: "Стаканы",
      },
      {
        id: "abc_172.22.22.214.if.16554",
        name: "Сифоны",
      },
      {
        id: "abc_172.22.22.214.if.6875",
        name: "Лейки",
      },
      {
        id: "abc_172.22.22.214.if.2655",
        name: "Шланги",
      },
    ],
  },
];

function HeaderCatalog(props) {
  const [displayChild, setDisplayChild] = useState(nodes[0].nodes);

  const handleChange = (event) => {
    props.onClick(event); // callback-функция
  };
  return (
    <div className="showCatalog">
      {nodes.map((element) => (
        <div
          key={element.id}
          onMouseEnter={() => setDisplayChild(element.nodes)}
          className="showCatalog_box"
        >
          <div className="showCatalog_name">
            <Link
              to={`/category/${element.id}`}
              className="link_main"
              onClick={() => {
                handleChange(false);
              }}
            >
              {element.name}
            </Link>
          </div>
        </div>
      ))}
      <div className="showCatalog_content">
        <HeaderCatalogItem idItem={displayChild} />
      </div>
    </div>
  );
}

export default HeaderCatalog;
