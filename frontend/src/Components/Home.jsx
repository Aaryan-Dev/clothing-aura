import { border, Box, Button, Flex, Image, Link } from "@chakra-ui/react"
import styles from "../styles/More.module.css";
import React from 'react'
import "../styles/Home.css"
import BoxCrouser from "./BoxCrouser";
const Home = () => {
  return (
    <div>
      <Box className="help">
        <p className="quest">Have a question? We can help.*_</p>
      </Box>
      {/* ....................big image...  */}
      <div>
        <Box className="bigImage">
          <img className="imm" width={"100%"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img0.jpg" />
          <p className="holiday">The <i>Holiday</i> Collection</p>
          <p className="holiday1">is here!</p>
          <p className="festive">No one does festive like we do...</p>
          <p className="shop"><u>Shop the new launch</u></p>
        </Box>
      </div>
      {/* ....................................... */}

      {/* .............small box........ */}
      <div>
        <Box className="nextbox">
          <img height={"250px"} width={"100%"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_gg_img0.jpg" />
          <p className="gift">The Gift Guide</p>
          <p className="herit">Great holiday presents are part of our heritage.</p>
          <p className="A2022">Here's our 2022 take...</p>
          <Box className="bb" height={"40px"} width={"75%"} marginLeft={"180px"} display={"flex"}
            justifyContent={"space-between"} >

            <Button className="shopp" width={"18%"}>Shop for her</Button>
            <Button className="shopp" width={"18%"}>Shop for him</Button>
            <Button className="shopp" width={"18%"}>Shop for girls</Button>
            <Button className="shopp" width={"18%"}>Shop for boys</Button>
            <Button className="shopp" width={"18%"}>Shop for the home</Button>

          </Box>
        </Box>
      </div>
      {/* .............twobox........... */}
      <div>
        <Box className="twobox">
          <Box className="first">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img1.jpg" />
            <p className="fair">Fair Isle forever</p>
            <p className="sweat"><u>Shop new sweaters</u></p>
          </Box>
          <Box className="second">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img2.jpg" />
            <p className="beThe">Be the</p>
            <p className="dressed">best-dressesd guest</p>
            <p className="visit"><u>Visit the Holiday Party Shop</u></p>
          </Box>
        </Box>
      </div>
      {/* .............twobox1........... */}
      <div>
        <Box className="twobox1">
          <Box className="first">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img3.jpg" />
            <p className="fair1">Coat Check</p>
            <p className="sweat1"><u>Shop parkas, topcoats & more</u></p>
          </Box>
          <Box className="second">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img4.jpg" />
            <p className="beThe1">Pj's all day</p>
            <p className="visit"><u>Shop flannel & more</u></p>
          </Box>
        </Box>
      </div>
      {/* .............twobox2........... */}
      <div>
        <Box className="twobox1">
          <Box className="first">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img5.jpg" />
            <p className="fair13">The shirts</p>
            <p className="fair3">of the season</p>
            <p className="sweat3"><u>Shop what's new</u></p>
          </Box>
          <Box className="second">
            <img width={"100%"} height={"730"} src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img6.jpg" />
            <p className="intro">Introducing The heritage duck boot</p>
            <p className="intro1">The heritage duck boot</p>
            <p className="visit1"><u>Shop new footwear</u></p>
          </Box>
        </Box>
      </div>
      {/* ........................................................................... */}

      <div>
        <Box className="Look">
          <img className="mid" src="https://www.jcrew.com/brand_creative/homepage2022/08-Aug2/2022aug_0802_hp_m_img1.jpg" />

          <p className="fall2">Fall 2022</p>


          <p className="Lbook">Lookbook</p>
          <p className="creative">New styles from men's creative</p>
          <p className="creative1">director Brendon Babenzien's</p>
          <p className="creative2">debut collection.</p>
          <p className="season"><u>See the season's looks</u></p>
        </Box>
      </div>
      {/* ......................................................................... */}
      <div>
        <Box className="pointer">
          {/* border={"1px solid black"} */}
          <Box width={"25%"} marginLeft={"240px"} >
            <p className="arr">
              Shop New Arrivals
            </p>
          </Box>
          {/* border={"1px solid black"} */}
          <Box width={"50%"} marginLeft={"50px"} display={"flex"} justifyContent={"space-between"}>
            <Button className="shopant">Shop Women</Button>
            <Button className="shopant">Shop Men</Button>
            <Button className="shopant">Shop Girls</Button>
            <Button className="shopant">Shop Boys</Button>
          </Box>

        </Box>
      </div>
      <div>
        {/* border={"1px solid black"}  */}
        <Box height={"160px"}>
          <p className="story">MORE STORIES</p>
          <p className="meets">
            Where style<i> meets creativity</i>
          </p>
        </Box>
      </div>
      {/* ........................MIDDLE BIG.......................... */}
      <div>
        {/* border={"1px solid maroon"} */}
        <Box height={"1800px"} marginTop={"20px"} position={"relative"}>

          {/* border={"1px solid red"} */}
          <Box border={"1px solid #deba58"} height={"1730px"} marginTop={"70px"} position={"relative"} backgroundColor={"#deba58"}>
            {/* .........Firstmain........ */}
            {/* border={"1px solid green"} */}
            <Box height={"670px"} width={"43%"} marginLeft={"190px"} marginTop={"-50px"} position={"relative"}>
              <Box height={"520px"}>
                <img src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov2/2022nov_1103_hp_m_nickpoe_img0.jpg" height={"520px"} marginTop={"-20px"} />
              </Box>
              <Box height={"150px"} >
                <p color="black" className="dressCode" >Dress Code:</p>
                <p className="downTown">downtown with Nick Poe</p>
                <p className="designer"><u>Meet the designer</u></p>
              </Box>
            </Box>
            {/* ..................seond................... */}
            {/* border={"1px solid green"} */}
            <Box height={"550px"} width={"70%"} marginLeft={"190px"} marginTop={"-70px"} display={"flex"}>
              {/* ........second1.......................... */}
              {/* border={"1px solid green"} */}
              <Box height={"350px"} width={"30%"} marginTop={"150px"}>
                <Box height={"250px"}>
                  <img src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img8.jpg" height={"250px"} width={"100%"} />
                </Box>
                <Box height={"95px"}>
                  <p className="tartan">The edit: tartan time</p>
                  <p className="roundup"><u>Shop the roundup</u></p>
                </Box>
              </Box>
              {/* .............second2............. */}
              {/* border={"1px solid green"}  */}
              <Box height={"350px"} width={"30%"} marginTop={"150px"} marginLeft={"30px"}>
                {/* border={"1px solid green"} */}
                <Box height={"250px"}>
                  <img src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_m_img12.jpg" height={"250px"} width={"100%"} />
                </Box>
                <Box height={"95px"}>
                  <p className="tartan1">Source materials</p>
                  <p className="roundup1"><u>Learn about our premium fabrics</u></p>
                </Box>
              </Box>
              {/* ..............................second3................... */}
              {/* border={"1px solid green"} */}
              <Box height={"550px"} width={"40%"} marginLeft={"130px"}>
                {/* border={"1px solid green"} */}
                <Box height={"380px"}>
                  <img src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img10.jpg" height={"380px"} width={"100%"} />
                </Box>
                <Box height={"160px"}>
                  <p className="suiting">Suiting up with Saji</p>
                  <p className="Abude">Abude</p>
                  <p className="stt"><u>See the story</u></p>
                </Box>
              </Box>
            </Box>
            {/* ...........last boxexxxess............................ */}
            <Box height={"460px"} marginTop={"60px"} width={"80%"} marginLeft={"185px"} display={"flex"} justifyContent={"space-between"}>
              <Box height={"430px"} width={"23%"}>
                <Box height={"280px"}>
                  <img src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct3/2022oct_1011_hp_w_img3.jpg" height={"280px"} width={"100%"} />
                </Box>
                <Box height={"150px"}>
                  <p className="sporting">
                    Sporting life:
                  </p>
                  <p className="tracks">
                    Tracksmith X C.Aura
                  </p>
                  <p className="meett">
                    <u>Meet the runners</u>
                  </p>
                </Box>
              </Box>
              <Box height={"460px"} width={"23%"}>
                <Box height={"280px"}>
                  <img src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_m_img12.jpg" height={"280px"} width={"100%"} />
                </Box>
                <Box height={"160px"}>
                  <p className="sporting13">
                    Sportlight: the Ludlow
                  </p>
                  <p className="sporting14">
                    double-breasted English
                  </p>
                  <p className="sporting15">
                    corduroy tuxedo
                  </p>
                  <p className="meett16">
                    <u>Get a closer look</u>
                  </p>
                </Box>
              </Box>
              <Box height={"460px"} width={"23%"}>
                <Box height={"280px"}>
                  <img src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_m_img9.jpg" height={"280px"} width={"100%"} />
                </Box>
                <Box height={"160px"}>
                  <p className="sporting18">
                    Limited edition:
                  </p>
                  <p className="sporting19">
                    BEAMS PLUS X C.AURA
                  </p>
                  <p className="sporting20">
                    with Mike Mills
                  </p>
                  <p className="meett21">
                    <u>See the story</u>
                  </p>
                </Box>
              </Box>
              <Box height={"430px"} width={"23%"}>
                <Box height={"280px"}>
                  <img src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_m_img10b.jpg" height={"280px"} width={"100%"} />
                </Box>
                <Box height={"150px"}>
                  <p className="sporting1">
                    Introducing Brendon
                  </p>
                  <p className="tracks1">
                    Babenzien
                  </p>
                  <p className="meett1">
                    <u>Meet our men's creative director</u>
                  </p>
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        {/* ............................................YoU MAY ALSO LVE................................................... */}
        <Box height={"300px"} marginBottom={"100px"}>
          <Box height={"58px"}>
            <p className="chotaBox">You'll Also Love</p>
          </Box>
          <div className="container">
            <div className="containerChild">
              <img src="https://www.jcrew.com/s7-img-facade/BK721_GR7805?wid=376" height={"240px"} width={"100%"} display={"block"} />
              <div className="overlay">
                <div className="text">
                  <h1 className="wrap">Wrap Sweater-skirt</h1>
                  <p className="INR">INR 23,223.00</p>
                </div>
              </div>
            </div>
            <div className="containerChild">
              <img src="https://www.jcrew.com/s7-img-facade/AR182_EB7994?wid=376" height={"240px"} width={"100%"} display={"block"} />
              <div className="overlay">
                <div className="text">
                  <h1 className="wrap2">Boston Clogs</h1>
                  <p className="INR">INR 14,886.00</p>
                </div>
              </div>
            </div>
            <div className="containerChild">
              <img src="https://www.jcrew.com/s7-img-facade/BE239_BK0001_m?wid=376" height={"240px"} width={"100%"} display={"block"} />
              <div className="overlay">
                <div className="text">
                  <h1 className="wrap4">Fashinova Tshrt</h1>
                  <p className="INR">INR 23,223.00</p>
                </div>
              </div>
            </div>
            <div className="containerChild">
              <img src="https://www.jcrew.com/s7-img-facade/BA342_SU0919?wid=376" height={"240px"} width={"100%"} display={"block"} />
              <div className="overlay">
                <div className="text">
                  <h1 className="wrap5">Wrap tshirt-shirt</h1>
                  <p className="INR">INR 23,223.00</p>
                </div>
              </div>
            </div>
            <div className="containerChild">
              <img src="https://www.jcrew.com/s7-img-facade/AZ779_EE0512?wid=376" height={"240px"} width={"100%"} display={"block"} />
              <div className="overlay">
                <div className="text">
                  <h1 className="wrap6">Wrap Shoes</h1>
                  <p className="INR">INR 23,223.00</p>
                </div>
              </div>
            </div>

          </div>

        </Box>
        {/* .................................................Carousel STart................................. */}
        {/* <Box border={"1px solid black"} height={"80px"} marginTop={"150px"}>
          <p className="insta">Shop our Instagram</p>
          <p className="funn">(and join the fun with #C.Aura)</p>
        </Box> */}

        {/* ......carouselpart ...................*/}



        {/* <BoxCrouser /> */}



        {/* ..............................more To SEE..................... */}

        <div className={styles.mainAboveFooter}>
          <h2 style={{ fontSize: 36, fontWeight: 400 }} className={styles.YouNeed}>More you need to see</h2>
          <div className={styles.aboveFooterImgWrap}>
            <div className={styles.aboveFooterInner}>
              <Link
                to="/products/mens"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src="https://www.jcrew.com/s7-img-facade/BH290_BL8486_m?wid=416"
                  alt=""
                />
                <div>
                  <h5>Shop Women's Dresses & Jumpsuits</h5>
                </div>
              </Link>
            </div>
            <div className={styles.aboveFooterInner}>
              <Link
                to="/products/mens"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src="https://www.jcrew.com/s7-img-facade/AY671_BK0001?wid=416"
                  alt=""
                />
                <div>
                  <h5>Shop Women's Shirts & Tops</h5>
                </div>
              </Link>
            </div>
            <div className={styles.aboveFooterInner}>
              <Link
                to="/products/mens"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src="https://www.jcrew.com/s7-img-facade/BG652_SU8788_m?wid=416"
                  alt=""
                />
                <div>
                  <h5>Shop Women's Sweaters</h5>
                </div>
              </Link>
            </div>
            <div className={styles.aboveFooterInner}>
              <Link
                to="/products/mens"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src="https://www.jcrew.com/s7-img-facade/AW770_OR5787_m?wid=416"
                  alt=""
                />
                <div>
                  <h5>Shop Women's The Tees Shop</h5>
                </div>
              </Link>
            </div>
            <div className={styles.aboveFooterInner}>
              <Link
                to="/products/mens"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src="https://www.jcrew.com/s7-img-facade/BL371_BL8133_m?wid=416"
                  alt=""
                />
                <div>
                  <h5>Shop Women's Sweatshirts & Sweatpants</h5>
                </div>
              </Link>
            </div>
            <div className={styles.aboveFooterInner}>
              <Link
                to="/products/mens"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src="https://www.jcrew.com/s7-img-facade/AB651_RD5371_m?wid=416"
                  alt=""
                />
                <div>
                  <h5>Shop Women's Pantwear</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home