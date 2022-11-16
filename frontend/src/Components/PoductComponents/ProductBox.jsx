import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./productcompo.css"
const ProductBox = (pro) => {
 const  {image,name,price,_id,col1,col2,col3}=pro.data
   
  return (
    <div>
        
    <div className='product_box' >
    <Link to={`/alldata/${_id}`}>
    <Box className='imgbox' >
    <Image className='productimg1' src={image} alt={image} />
    </Box>
    <Box className='infodata' >
        <Text>{name}</Text>
        <Text>INR {price}.00</Text>
    </Box>
    <p className='seleccolortag'>Select colors </p>
    <Box className='colorbox'>
    <Image className='color_img' src={col1} alt="color" />
    <Image className='color_img' src={col2} alt="color" />
    <Image className='color_img' src={col3} alt="color" />
    <Image className='color_img' src={col3} alt="color" />
    </Box>
    </Link>
    </div>
    </div>
  )
}
export default ProductBox