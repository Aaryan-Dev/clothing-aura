import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./productpage.css"
import { Box, Image, Text } from '@chakra-ui/react';
import ProductBox from '../../Components/PoductComponents/ProductBox';
import { getwomensproduct } from '../../Redux/Products/action.product';
import { useDispatch, useSelector } from 'react-redux';
import HaveAquestion from '../../Components/PoductComponents/HaveAquestion';

const Womenpage = () => {
  const {loading,data}=useSelector((store)=>store.product)
  const dispatch=useDispatch()
  
      useEffect(() => {
       dispatch( getwomensproduct())
      }, []);;
  return (<>
  {/* <HaveAquestion/> */}
<h1 className='shop_title'>SHOP ALL WOMEN'S CLOTHING</h1>
  
        <div  className='productpage_div12'>
        {data?.map((pro) =>
<ProductBox data={pro}/>
  )}
        </div>
   
    </>
  )
}

export default Womenpage










