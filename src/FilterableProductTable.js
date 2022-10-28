import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const  FilterableProductTable = (props) => {
  const {product} = props;
  const [filterText,setOnFilterTextChange] = useState('');
  const [inStockOnly,setOnInStockChange] = useState(false);

      return (
        <div>
          <SearchBar filterText={filterText} inStockOnly={inStockOnly} handleFilterTextChange={setOnFilterTextChange} handleInStockChange = {setOnInStockChange}/>
          
          <ProductTable product={product} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
      );
  }
  
  export default FilterableProductTable;