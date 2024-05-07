import React, { useEffect, useState } from "react";

function CategoryItem(props) {
  const filteredBrands = (product) => {
    if (!props.brand.length) return true;
    if (!product.brand) return false;
    // Проверяем, есть ли у продукта значение "brand" и принадлежит ли оно к одному из filterValues
    return props.brand.some((filter) => filter.label === product.brand.name);
  };
  const filteredCovers = (product) => {
    if (!props.covers.length) return true;
    if (!product.covers) return false;
    return props.covers.some((filter) => filter.label === product.covers.name);
  };

  const filteredMaterials = (product) => {
    if (!props.materials.length) return true;
    if (!product.materials) return false;
    return props.materials.some(
      (filter) => filter.label === product.materials.name
    );
  };
  const filteredColours = (product) => {
    if (!props.colours.length) return true;
    if (!product.colours) return false;
    return props.colours.some(
      (filter) => filter.label === product.colours.name
    );
  };
  const filteredAvailabilities = (product) => {
    if (!props.availabilities.length) return true;
    if (!product.availabilities) return false;
    return props.availabilities.some(
      (filter) => filter.label === product.availabilities.name
    );
  };
  const filteredCountries = (product) => {
    if (!props.countries.length) return true;
    if (!product.countries) return false;
    return props.countries.some(
      (filter) => filter.label === product.countries.name
    );
  };
  const filteredTypes = (product) => {
    if (!props.types.length) return true;
    if (!product.types) return false;
    return props.types.some((filter) => filter.label === product.types.name);
  };

  const filteredProducts = props.products.filter((product) => {
    return (
      filteredBrands(product) &&
      filteredCovers(product) &&
      filteredMaterials(product) &&
      filteredColours(product) &&
      filteredAvailabilities(product) &&
      filteredCountries(product) &&
      filteredTypes(product)
    );
  });
const handleChange = () => {
  props.setFilteredProducts(() => filteredProducts);
};

  return <div className="search_of_filter" onClick={handleChange}>Использовать фильтр</div>;
}

export default CategoryItem;
