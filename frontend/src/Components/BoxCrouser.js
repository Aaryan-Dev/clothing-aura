import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import "../App.css"

const BoxCrouser = () => {
    const hstyle = {
        display:"flex",
        overflow:"hidden",
        scrollBehavior:"smooth",
        border:"1px solid green",
        width:"90%",
        height:"210px",
        margin:"auto",
        position:"relative",
        /* justifyContent:"space-around", */
        gap:"10px"
       }

       const boxRef = useRef()
       let box = boxRef.current 


    function doIt(){
        if(box.scrollLeft<"300"){
            box.scrollLeft = 1800
        } else{
            box.scrollLeft = box.scrollLeft - 300
        }
    }
    function doIt2(){
        if(box.scrollLeft>"1700"){
            box.scrollLeft = 10
        } else {
            box.scrollLeft = box.scrollLeft + 300
        }
        /* console.log(box.scrollLeft) */
    }

    // useEffect(()=>{
    //     setInterval(() => {
    //             doIt2()
    //     },3500);
    // },[])

    //ffggzxszd sadfsssasasdsdsadv sdsadsc asd



  return (
    <Box marginTop={"20px"}>
        <Button  onClick={()=>doIt()} >left</Button>
        <Button marginLeft={"8px"} onClick={()=>doIt2()}>right</Button>
        <div id='yes'>
            h
        </div>
        
        <Box id="hello" ref={boxRef} style={hstyle}>
            <Box className="look" style={{width:"35%",height:"auto",border:"1px solid red", }} >1</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >2</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >3</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >4</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >5</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >6</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >7</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >8</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >9</Box>
            <Box className="look" style={{width:"25%",height:"auto",border:"1px solid red", }} >10</Box>
        </Box>

    </Box>
  )
}

export default BoxCrouser