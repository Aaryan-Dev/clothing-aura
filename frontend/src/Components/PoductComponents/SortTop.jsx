import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./productcompo.css"
const SortTop = () => {
  const [value,setvalue]=useState([])
console.log(value)
// const {loading, data} = useSelector((store) => store.product);
// setvalue(data)
  return (
    <>
  <select value={value}  onChange={(e)=>setvalue(e.target.value)} placeholder='Sort Product By' className='sortproductform'>
    <option>Sort Products By </option>
    <option value="high">High - Low</option>
    <option value="low">Low - High</option>
  </select>
    </>
  )
}

export default SortTop