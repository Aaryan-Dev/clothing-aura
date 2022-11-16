import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productpage.css";
import { Box, CircularProgress, Image, Spinner, Text } from "@chakra-ui/react";
import ProductBox from "../../Components/PoductComponents/ProductBox";
import { useDispatch, useSelector } from "react-redux";
import { getdatabyprice_asc, getdatabyprice_dsc, getproduct, getSerchedData } from "../../Redux/Products/action.product";
import HaveAquestion from "../../Components/PoductComponents/HaveAquestion";
import { CiSearch } from "react-icons/ci";
import SortTop from "../../Components/PoductComponents/SortTop";
import { SearchBox } from "../../Components/PoductComponents/SearchBox";
const AllProducts = () => {
  const { loading, data } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct());
  }, []);
  const [input, setinput] = useState("")
  const serchdata = () => {
    dispatch(getSerchedData(input))
  };
  const reset_serch = () => {
    setinput("")
    dispatch(getproduct());
  }
  const [selcted_value, setselcted_value] = useState("");

  const handleChange = (event) => {
    setselcted_value(event.target.value)
    console.log(event.target.value)

    if (event.target.value == "asc") {
      dispatch(getdatabyprice_asc())
    } else {
      dispatch(getdatabyprice_dsc())
    }
  }

  return (
    <>
      <HaveAquestion />
      <div className="sorting_div">
        {/* <SortTop/> */}
        <form>
          <select value={selcted_value} className='sortproductform' onChange={handleChange}>
            <option disabled value="">Sort Prices By </option>
            <option value="asc">Low to High</option>
            <option value="dsc">High to Low</option>
          </select>
        </form>


        <Box sx={{ display: { xs: 'none', lg: 'flex', md: 'flex' }, mr: 2, }}
          component="div"
          border="2px solid #ddd"
          width="200px"
          display="flex"
          alignItems="center"
          height="30px"
          className="serchbox"
          padding="5px">
          <input onChange={(e) => setinput(e.target.value)} className="searchText" type="text" placeholder="Search" />
          <CiSearch className="serch_btn" fontSize="25px" onClick={serchdata} />
        </Box>
      </div>
      {loading ? <div className="loadingspinner"><CircularProgress /></div> : ""}
      <div className="productpage1">
        {/* <HaveAquestion />
        <SortTop /> */}
        <div className="productpage_div1">
          {data?.map((pro) => (
            <ProductBox data={pro} />
          ))}
        </div>
      </div>
    </>
  );
};
export default AllProducts;
