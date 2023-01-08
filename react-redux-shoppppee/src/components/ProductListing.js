import React,{useEffect} from "react";
import ProductComponent from "./ProductComponent"
import {useDispatch,useSelector} from 'react-redux';
import axios from "axios";
import { setProducts } from "../redux/actions/ProductActions";

const ProductListing = () => {
  //map state to props  
 
  const products=useSelector((state)=>state.allProducts.products); 
  //map dispatch to props
  const dispatch=useDispatch();
  const fetchProducts=async ()=>{
      const response=await axios.get("https://fakestoreapi.com/products")
      .catch((err)=>{console.log("errpr occured",err)});
      dispatch(setProducts(response.data));
  }
  useEffect(()=>{
    fetchProducts(); 
  },[]);
  console.log("products",products);
  return (
    
    <div className="ui grid container">
        <ProductComponent/>
    </div>
 
  );
};

export default ProductListing;