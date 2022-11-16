import {Box, Checkbox, Divider, Spinner} from "@chakra-ui/react";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import HaveAquestion from "../../Components/PoductComponents/HaveAquestion";
import { getsingleproduct } from "../../Redux/Products/action.product";
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
const Singleproductpage = () => {
  const param = useParams();

  const infodata = [
    "100% cotton.",
    "Long sleeves.",
    "Rib trim at cuffs.",
    "Machine wash.",
    "Import.",
    "Select stores.",
  ];
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large"];
const {loading,data}=useSelector((store)=>store.product)
const dispatch=useDispatch()
  const {price, type, category,name, item, productdescription, image} =data
  useEffect(() => {
    dispatch(getsingleproduct(param.id))

  }, [param.id]);


  return (
    <>
    
    <HaveAquestion/>
    <div className="productinfo_page">
      {/* {loading?<Spinner size='xl' />:""} */}
      {/* ..............left............. */}
      <div className="leftbox">
        <div className="main_img_div">
          <img src={image} alt="yes" />
        </div>
      </div>

      {/* ................Right............. */}

      <div className="rightbox">
        <h2>{name}</h2>
        <p className="mini_title " id="close">
          Item {item}
        </p>
        <h2>
          INR <span>{price}.00</span>
        </h2>

        {/* ..sizebox... */}
        <div className="SizesBox">
          <p className="mini_title" style={{lineHeight: "0px"}}>
            Size :<span style={{color: "black"}}>Select A Size</span>{" "}
          </p>
          <p style={{fontStyle: "italic", fontSize: "14px", lineHeight: "0px"}}>
            All Sizes are US Sizes{" "}
          </p>

          <div className="sizebtn_div">
            {sizes.map((si) => (
              <button className="Sizes_button">{si}</button>
            ))}
          </div>
        </div>

        {/* ...qty ... */}
        <div className="qtydiv">
          <p className="mini_title">Quantity : </p>
          <form  action="/action_page.php">
            <select className="qty_form" name="cars" id="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
        </div>

        {/* ...add to cartbuton ... */}
        <div className="buttondiv">
          <p style={{lineHeight:"0px"}}>Prices include duties and taxes.</p>

          <div>
            <button>Add To Bag</button>
            <button><Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite/>} /></button>
          </div>
        </div>

        <hr />

        {/* ...product Details... */}

        <div>
          <p className="t_title"> Product Details</p>

          <p className="desc">{productdescription}</p>

          {infodata.map((el) => (
            <ul>
              <li>{el}</li>
            </ul>
          ))}

          <p className="t_title">Our Fabrics, Re-imagined</p>

          <div className="reimagened">
            <img
              src="https://images.jcrew.com/fsi/images/ReImagined-Sustainble-new.svg"
              alt="not found"
            />
            <p className="t_title">Re-imagined</p>
          </div>

          <p className="desc">
            This style contains at least 30% of a Re-imagined fabric, which
            contributes to our goal of sustainably sourcing 100% of our key
            fibers by 2025.
          </p>
        </div>

        {/* ...lern more .. */}
        <div
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          <span>
            <a href="">Learn More</a>{" "}
          </span>
          <span>
            <a href="">Shop All Re-imagined</a>{" "}
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Singleproductpage;
