import React, { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import Select from "react-select";
import "./Filter.css";

function Filter({ products, onChange }) {
  const [brand, setBrand] = useState([]);
  const [covers, setCovers] = useState([]);
  const [colours, setColours] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [types, setTypes] = useState([]);
  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);
  const [seeFilter, setSeeFilter] = useState(false);
  const [valueBrand, setValueBrand] = useState([]);
  const [valueCovers, setValueCovers] = useState([]);
  const [valueMaterials, setValueMaterials] = useState([]);
  const [valueColours, setValueColours] = useState([]);
  const [valueAvailabilities, setValueAvailabilities] = useState([]);
  const [valueCountries, setValueCountries] = useState([]);
  const [valueTypes, setValueTypes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    try {
      if (products.length > 0) {
        setBrand([]);
        setCovers([]);
        setColours([]);
        setMaterials([]);
        setAvailabilities([]);
        setCountries([]);
        setTypes([]);
        setValueBrand([]);
        setValueCovers([]);
        setValueMaterials([]);
        setValueColours([]);
        setValueAvailabilities([]);
        setValueCountries([]);
        setValueTypes([]);

        setMinPrice(products[0].price);
        products.forEach((element) => {
          if (element.brand !== null) {
            setBrand((prev) => [...prev, element.brand.name]);
          }
          if (element.covers !== null) {
            setCovers((prev) => [...prev, element.covers.name]);
          }
          if (element.colours !== null) {
            setColours((prev) => [...prev, element.colours.name]);
          }
          if (element.materials !== null) {
            setMaterials((prev) => [...prev, element.materials.name]);
          }
          if (element.availabilities !== null) {
            setAvailabilities((prev) => [...prev, element.availabilities.name]);
          }
          if (element.countries !== null) {
            setCountries((prev) => [...prev, element.countries.name]);
          }
          if (element.types !== null) {
            setTypes((prev) => [...prev, element.types.name]);
          }
        });
      }
    } catch (error) {
      console.error("Ошибка при обновлении фильтров:", error);
      // Можно выполнить дополнительные действия, например, обновить состояние компонента или вывести сообщение об ошибке
    }
  }, [products]);

  /// Изменение Бренда
  const handleCangeBrand = (e) => {
    setValueBrand(e);
  };

  /// Изменение Покрытия
  const handleCangeCovers = (e) => {
    setValueCovers(e);
  };

  /// Изменение Материала
  const handleCangeMaterials = (e) => {
    setValueMaterials(e);
  };

  /// Изменение Материала
  const handleCangeColours = (e) => {
    setValueColours(e);
  };

  /// Изменение Материала
  const handleCangeAvailabilities = (e) => {
    setValueAvailabilities(e);
  };

  /// Изменение Страна
  const handleCangeCountries = (e) => {
    setValueCountries(e);
  };
  /// Изменение Страна
  const handleCangeTypes = (e) => {
    setValueTypes(e);
  };

  useEffect(() => {
    try {
      if (products.length > 0) {
        setMinPrice(products[0].price);
        products.forEach((element) => {
          if (element.brand !== null) {
            setBrand((prev) => [...prev, element.brand.name]);
          }
          if (element.covers !== null) {
            setCovers((prev) => [...prev, element.covers.name]);
          }
          if (element.colours !== null) {
            setColours((prev) => [...prev, element.colours.name]);
          }
          if (element.materials !== null) {
            setMaterials((prev) => [...prev, element.materials.name]);
          }
          if (element.availabilities !== null) {
            setAvailabilities((prev) => [...prev, element.availabilities.name]);
          }
          if (element.countries !== null) {
            setCountries((prev) => [...prev, element.countries.name]);
          }
          if (element.types !== null) {
            setTypes((prev) => [...prev, element.types.name]);
          }
        });
      }
    } catch (error) {
      console.error("Ошибка при обновлении фильтров:", error);
      // Можно выполнить дополнительные действия, например, обновить состояние компонента или вывести сообщение об ошибке
    }
  }, [products]);

  /// Бренд
  const filterBrand = brand.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.label === curr);
    if (!existingItem) {
      acc.push({ value: curr, label: curr });
    }
    return acc;
  }, []);

  /// Покрытие
  const filterCovers = covers.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.label === curr);
    if (!existingItem) {
      acc.push({ value: curr, label: curr });
    }
    return acc;
  }, []);

  /// Материал
  const filterMaterials = materials.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.label === curr);
    if (!existingItem) {
      acc.push({ value: curr, label: curr });
    }
    return acc;
  }, []);

  /// Цвет
  const filterColours = colours.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.label === curr);
    if (!existingItem) {
      acc.push({ value: curr, label: curr });
    }
    return acc;
  }, []);

  /// Цвет
  const filterAvailabilities = availabilities.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.label === curr);
    if (!existingItem) {
      acc.push({ value: curr, label: curr });
    }
    return acc;
  }, []);

  /// Цвет
  const filterCountries = countries.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.label === curr);
    if (!existingItem) {
      acc.push({ value: curr, label: curr });
    }
    return acc;
  }, []);

  /// Цвет
  const filterTypes = types.reduce((acc, curr) => {
    const existingItem = acc.find((item) => item.label === curr);
    if (!existingItem) {
      acc.push({ value: curr, label: curr });
    }
    return acc;
  }, []);


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f4f6f9", // Цвет фона
      borderRadius: "8px", // Закругление углов
    }),
    // Другие стили по необходимости...
  };

  const handleChange = (value) => {
    setFilteredProducts(value);
    onChange(value);
  };
  return (
    <div className="filter-container">
      {filterBrand.length > 0 ? (
        <div>
          <h3 className="filter-title">Бренды</h3>
          <Select
            styles={customStyles}
            className="react-select"
            value={valueBrand}
            onChange={handleCangeBrand}
            options={filterBrand}
            isMulti
          ></Select>
        </div>
      ) : null}
      {filterCovers.length > 0 ? (
        <div>
          <h3 className="filter-title">Покрытие</h3>
          <Select
            styles={customStyles}
            className="react-select"
            onChange={handleCangeCovers}
            options={filterCovers}
            isMulti
          ></Select>
        </div>
      ) : null}
      {filterMaterials.length > 0 ? (
        <div>
          <h3 className="filter-title">Материал</h3>
          <Select
            styles={customStyles}
            className="react-select"
            onChange={handleCangeMaterials}
            options={filterMaterials}
            isMulti
          ></Select>
        </div>
      ) : null}
      {filterColours.length > 0 ? (
        <div>
          <h3 className="filter-title">Цвет</h3>
          <Select
            styles={customStyles}
            className="react-select"
            onChange={handleCangeColours}
            options={filterColours}
            isMulti
          ></Select>
        </div>
      ) : null}
      {filterAvailabilities.length > 0 ? (
        <div>
          <h3 className="filter-title">Бренды</h3>
          <Select
            styles={customStyles}
            className="react-select"
            onChange={handleCangeAvailabilities}
            options={filterAvailabilities}
            isMulti
          ></Select>
        </div>
      ) : null}
      {filterCountries.length > 0 ? (
        <div>
          <h3 className="filter-title">Страна</h3>
          <Select
            styles={customStyles}
            className="react-select"
            onChange={handleCangeCountries}
            options={filterCountries}
            isMulti
          ></Select>
        </div>
      ) : null}
      {filterTypes.length > 0 ? (
        <div>
          <h3 className="filter-title">Тип</h3>
          <Select
            styles={customStyles}
            className="react-select"
            onChange={handleCangeTypes}
            options={filterTypes}
            isMulti
          ></Select>
        </div>
      ) : null}
      <CategoryItem
        products={products}
        brand={valueBrand}
        covers={valueCovers}
        materials={valueMaterials}
        colours={valueColours}
        availabilities={valueAvailabilities}
        countries={valueCountries}
        types={valueTypes}
        setFilteredProducts={handleChange}
      />
    </div>
  );
}

export default Filter;
