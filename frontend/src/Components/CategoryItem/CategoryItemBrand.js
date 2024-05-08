import React from "react";

function CategoryItemBrand(props) {
  const filteredProducts = props.products.filter((product) => {
    const filteredBrands =
      props.brand.length === 0 ||
      (product.category &&
        props.brand.some((filter) => filter.label === product.category.name));
    const filteredCovers =
      props.covers.length === 0 ||
      (product.covers && props.covers.some((filter) => filter.label === product.covers.name));
    const filteredMaterials =
      props.materials.length === 0 ||
      (product.materials &&
        props.materials.some((filter) => filter.label === product.materials.name));
    const filteredColours =
      props.colours.length === 0 ||
      (product.colours && props.colours.some((filter) => filter.label === product.colours.name));
    const filteredAvailabilities =
      props.availabilities.length === 0 ||
      (product.availabilities &&
        props.availabilities.some((filter) => filter.label === product.availabilities.name));
    const filteredCountries =
      props.countries.length === 0 ||
      (product.countries && props.countries.some((filter) => filter.label === product.countries.name));
    const filteredTypes =
      props.types.length === 0 ||
      (product.types && props.types.some((filter) => filter.label === product.types.name));

    return (
      filteredBrands &&
      filteredCovers &&
      filteredMaterials &&
      filteredColours &&
      filteredAvailabilities &&
      filteredCountries &&
      filteredTypes
    );
  });

  const handleChange = () => {
    props.setFilteredProducts(filteredProducts);
  };

  return <div className="search_of_filter" onClick={handleChange}>Использовать фильтр</div>;
}

export default CategoryItemBrand;
