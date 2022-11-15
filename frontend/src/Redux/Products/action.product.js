import axios from "axios";
import { GET_PRODUCT_LOADING,GET_PRODUCT_ERROR ,GET_PRODUCT_SUCESS} from "./types.product";

export const getproduct=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
try{
let response=await axios.get("http://localhost:8000/data")
dispatch({type:GET_PRODUCT_SUCESS,payload:response.data})
return response.data
}catch(e){
    dispatch({type:GET_PRODUCT_ERROR})
}
}
export const getmensproduct=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
try{
let response=await axios.get("http://localhost:8000/data/men")
dispatch({type:GET_PRODUCT_SUCESS,payload:response.data.mensproducts})
return response.data
}catch(e){
    dispatch({type:GET_PRODUCT_ERROR})
}
}
export const getwomensproduct=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
try{
let response=await axios.get("http://localhost:8000/data/women")
dispatch({type:GET_PRODUCT_SUCESS,payload:response.data.womenproducts})
return response.data
}catch(e){
    dispatch({type:GET_PRODUCT_ERROR})
}
}

export const getsingleproduct=(id)=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
try{
let response=await axios.get("http://localhost:8000/data/"+id)
dispatch({type:GET_PRODUCT_SUCESS,payload:response.data})
return response.data
}catch(e){
    dispatch({type:GET_PRODUCT_ERROR})
}
}                                                                                                                                                                                                                                       
export const getSerchedData=(input)=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
try{
let response=await axios.get(`http://localhost:8000/data/search/${input}`)
dispatch({type:GET_PRODUCT_SUCESS,payload:response.data})
return response.data
}catch(e){
    dispatch({type:GET_PRODUCT_ERROR})
}
}                                                                                                                                                                                                                                       
export const getdatabyprice_asc=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
try{
let response=await axios.get("http://localhost:8000/data/price1/asc")
dispatch({type:GET_PRODUCT_SUCESS,payload:response.data})
return response.data
}catch(e){
    dispatch({type:GET_PRODUCT_ERROR})
}
}                                                                                                                                                                                                                                       
export const getdatabyprice_dsc=()=>async(dispatch)=>{
    dispatch({type:GET_PRODUCT_LOADING})
try{
let response=await axios.get("http://localhost:8000/data/price/dsc")
dispatch({type:GET_PRODUCT_SUCESS,payload:response.data})
return response.data
}catch(e){
    dispatch({type:GET_PRODUCT_ERROR})
}
}                                                                                                                                                                                                                                       

