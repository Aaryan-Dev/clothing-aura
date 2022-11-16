import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../Logo/logo.jpeg";
import stylesc from "styled-components"
import { HiOutlineShoppingBag, HiPlus, HiMinus } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import { SlHandbag } from "react-icons/sl";
import Modal from '@mui/material/Modal';
import "../styles/Navbar.css"
import { userAuthentication, userSignOut } from '../Redux/Auth/action';
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import Signup from './Signup';

const pages = ['Gifts', 'New', 'Women', 'Men', 'Kids', 'Cashmere', 'Home', 'Stories', 'Sale'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Navbar = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password);
    const handleLogin = () => {
        const payload = {
            email, password
        }
        dispatch(userAuthentication(payload));
    }
    const handleSignout = () => {
        dispatch(userSignOut());
    }
    // Drawer
    const [state, setState] = React.useState({ left: false });

    const [plus, setPlus] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 430,
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const [menu, setMenu] = useState("list");
    const [hoverMenu, setHoverMenu] = useState("");
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, mt: '15px' }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Button size="large" href="https://www.google.com" sx={{ ml: 10 }}>SignIN</Button>
            <List>
                {['Gifts', 'New', 'Women', 'Men', 'Kids', 'Cashmere', 'Home', 'Stories', 'Sale'].map((text, index) => (
                    <ListItem key={index} disablePadding onClick={() => setMenu(text)}>
                        <ListItemButton>
                            <ListItemText primary={text} />
                            <BiChevronRight />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );
    //   Drawer Ends Here
    const gift = (
        <MenuContainer>
            <List sx={{ mt: 5, width: '250px' }} >
                <Divider />
                <Typography textAlign="center" padding="10px">{menu}</Typography>
                <Divider />
                {[{ title: 'For Men', path: '/men' },
                { title: 'For Women', path: '/women' },
                { title: 'For Girls', path: '/girls' },
                { title: 'For Boys', path: '/boys' },
                { title: 'For The Home', path: '/home' },
                ].map((ele, index) => (
                    <Link to={ele.path} key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={ele.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </MenuContainer>
    )

    const news = (
        <MenuContainer>
            <List sx={{ mt: 5, width: '250px' }} >
                <Divider />
                <Typography textAlign="center" sx={{ size: "large" }} padding="10px">{menu}</Typography>
                <Divider />
                <Typography textAlign="Center" sx={{ mt: 2, fontWeight: 700 }}>Shop New Arrivals</Typography>
                {[{ title: 'For Women', path: '/women' },
                { title: 'For Men', path: '/men' },
                { title: 'For Girls', path: '/girls' },
                { title: 'For Boys', path: '/boys' },
                ].map((ele, index) => (
                    <Link to={"/alldata"} key={index}>
                        <ListItem disablePadding sx={{ mb: -2 }}>
                            <ListItemButton>
                                <ListItemText primary={ele.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
                <Divider sx={{ mt: 3 }} />
                <Typography textAlign="Center" sx={{ mt: 2, fontWeight: 700 }}>What to Shop Now</Typography>
                <Typography sx={{ mt: 2, ml: 2, mb: 0, color: 'gray', fontWeight: 700 }}>Women</Typography>
                {[{ title: 'The Holiday Party Shop', path: '/forwomen' },
                { title: 'Tartan Time', path: '/alldata' },
                { title: "Olympia's Picks", path: '/girls' },
                { title: 'The Work Remix', path: '/boys' },
                { title: 'The Sun Shop', path: '/boys' },
                { title: 'The Ski Shop', path: '/boys' },
                ].map((ele, index) => (
                    <Link to={ele.path} key={index}>
                        <ListItem disablePadding sx={{ mb: -2 }}>
                            <ListItemButton>
                                <ListItemText primary={ele.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
                <Divider sx={{ mt: 3 }} />
                <Typography sx={{ mt: 2, ml: 2, mb: 0, color: 'gray', fontWeight: 700 }}>Men</Typography>
                {[{ title: 'Fair Isle Sweaters', path: '/alldata' },
                { title: 'The Holiday Party Shop', path: '/men' },
                { title: 'Midweight Flannel Workshirts', path: '/men' },
                { title: 'New Parkas & Topcoats', path: '/men' },
                { title: 'Source Materials', path: '/men' },
                { title: 'Heritage 14 Oz. Fleece', path: '/men' },
                ].map((ele, index) => (
                    <Link to={ele.path} key={index}>
                        <ListItem disablePadding sx={{ mb: -2 }}>
                            <ListItemButton>
                                <ListItemText primary={ele.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </MenuContainer>
    )

    const women = (
        <MenuContainer>
            <List sx={{ mt: 5, width: '250px' }} >
                <Divider />
                <Typography textAlign="center" sx={{ size: "large" }} padding="10px">{menu}</Typography>
                <Divider />
                <Box sx={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
                    <Typography sx={{ mt: 2, ml: 2, fontWeight: 700 }}>Shop By Size</Typography>
                    {!plus && <HiPlus style={{ position: "absolute", top: 17, left: 180 }} onClick={() => setPlus(!plus)} />}
                    {plus && <HiMinus style={{ position: "absolute", top: 17, left: 180 }} onClick={() => setPlus(!plus)} />}
                </Box>
                <Box sx={{ flexGrow: 1, ml: 2, mr: 2, mt: 2 }}>
                    <Grid container spacing={{ xs: 1, }} columns={{ xs: 20, sm: 12, md: 12 }}>
                        {plus && ["XXS", "XS", "S", "M", "L", "XXL", "XL", "2X", "3X", "L"].map((ele, index) => (
                            <Grid item xs={3} key={index}>
                                <div className="sizeContain">{ele}</div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Divider sx={{ mt: 2 }} />
                <Typography sx={{ mt: 2, ml: 2, fontWeight: 700 }}>What to Shop Now</Typography>
                <Typography sx={{ mt: 2, ml: 2, mb: 0, color: 'gray', fontWeight: 700 }}>Women</Typography>
                {[{ title: 'The Holiday Party Shop', path: '/women' },
                { title: 'Tartan Time', path: '/men' },
                { title: "Olympia's Picks", path: '/girls' },
                { title: 'The Work Remix', path: '/boys' },
                { title: 'The Sun Shop', path: '/boys' },
                { title: 'The Ski Shop', path: '/boys' },
                ].map((ele, index) => (
                    <Link to={ele.path} key={index}>
                        <ListItem disablePadding sx={{ mb: -2 }}>
                            <ListItemButton>
                                <ListItemText primary={ele.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>))}
                <Divider sx={{ mt: 3 }} />
                <Typography sx={{ mt: 2, ml: 2, mb: 0, color: 'gray', fontWeight: 700 }}>Men</Typography>
                {[{ title: 'Fair Isle Sweaters', path: '/women' },
                { title: 'The Holiday Party Shop', path: '/women' },
                { title: 'Midweight Flannel Workshirts', path: '/women' },
                { title: 'New Parkas & Topcoats', path: '/women' },
                { title: 'Source Materials', path: '/women' },
                { title: 'Heritage 14 Oz. Fleece', path: '/women' },
                ].map((ele, index) => (
                    <Link to={ele.path} key={index}>
                        <ListItem disablePadding sx={{ mb: -2 }}>
                            <ListItemButton>
                                <ListItemText primary={ele.title} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </MenuContainer>
    )

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log(event.target.innerText)
        setHoverMenu(event.target.innerText);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setHoverMenu("")
    };
    const { isAuth } = useSelector((store) => (store.AuthReducer));
    const [userAuth, setUserAuth] = useState(isAuth);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [authComponent, setauthComponent] = useState('Login');
    useEffect(() => {
        if (isAuth) {
            console.log(isAuth)
        }

    }, [userAuth, isAuth])
    return (
        <NavbarContainer>
            <AppBar elevation={0} position="static" sx={{ borderBottom: "1px solid #ddd", backgroundColor: "white", color: "black" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to="/">
                            <Box
                                component="img"
                                sx={{
                                    display: { xs: 'none', md: 'flex' }, mr: 1,
                                    height: 80,
                                    width: 300,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="The house from the offer."
                                src={logo}
                            >
                            </Box>
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer("left", true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                sx={{ position: 'relative' }}
                                anchor={"left"}
                                open={state["left"]}
                            >
                                <VscChromeClose style={{ position: "absolute", top: menu === 'list' ? '25' : '18', left: "25", fontSize: "large" }} onClick={toggleDrawer("left", false)} />

                                {menu !== "list" && <BiChevronLeft style={{ zIndex: 13000, position: "absolute", top: "58px", left: "25", fontSize: "25px" }} onClick={() => setMenu("list")} />}


                                <div className="menuList">
                                    {menu === "list" && list("left")}
                                    {menu === "Gifts" && gift}
                                    {menu === "New" && news}
                                    {menu === "Women" && women}
                                </div>
                            </Drawer>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={toggleDrawer("left", false)}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/* hover menus  */}
                                {pages.map((page) => (
                                    <MenuItem key={page}
                                        onClick={toggleDrawer("left", false)}
                                    >
                                        <Typography textAlign="center" >{page}Hello</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            component="img"
                            sx={{
                                display: { xs: 'flex', md: 'none' }, mr: 1,
                                height: 80,
                                width: 300,
                            }}
                            alt="The house from the offer."
                            src={logo}
                        />

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <>
                                    <Button
                                        key={page}
                                        id="fade-button"
                                        aria-controls={open ? 'fade-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}

                                        sx={{ my: 2, color: 'black', display: 'block' }}
                                    >
                                        <Typography onMouseOver={(event) => handleClick(event)}>{page}</Typography>
                                    </Button>
                                    {hoverMenu !== "" &&
                                        <Menu
                                            id="fade-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'fade-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            elevation={1}
                                            onClose={handleClose}
                                            TransitionComponent={Fade}
                                            sx={{ ml: 0, mt: 2 }}
                                        >
                                            {hoverMenu === "GIFTS" &&
                                                <Box sx={{ padding: 1, width: "200px" }}>
                                                    <MenuItem onClick={handleClose}>
                                                        <Typography sx={{ fontWeight: 800, color: 'gray', mb: 1 }}>
                                                            GIFTS
                                                        </Typography>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose}><Link to="/women">For Women</Link></MenuItem>
                                                    <MenuItem onClick={handleClose}><Link to="/men">For Men</Link></MenuItem>
                                                    <MenuItem onClick={handleClose}><Link to="/girl">For Girls</Link></MenuItem>
                                                    <MenuItem onClick={handleClose}><Link to="/boy">For Boys</Link></MenuItem>
                                                    <MenuItem onClick={handleClose}><Link to="/home">For Home</Link></MenuItem>
                                                </Box>}
                                            {hoverMenu === "NEW" &&
                                                <Box sx={{ display: 'flex' }}>
                                                    <Box sx={{ padding: 1 }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ fontWeight: 700, color: '#343434', mb: 1 }}>
                                                                Shop New Arrivals
                                                            </Typography>
                                                        </MenuItem>
                                                        {['For Women', 'For Men', 'For Girls', 'For Boys'].map((ele, index) => (
                                                            <MenuItem onClick={handleClose} key={index}>{ele}</MenuItem>
                                                        ))}
                                                    </Box>
                                                    <Box sx={{ padding: 1 }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ fontWeight: 700, color: '#343434', mb: 0 }}>
                                                                What To Shop Now
                                                            </Typography>
                                                        </MenuItem>
                                                        <Box sx={{ display: 'flex' }}>
                                                            <Box sx={{ padding: 1 }}>
                                                                <MenuItem onClick={handleClose}>
                                                                    <Typography sx={{ fontWeight: 600, color: '#343434', mb: 0 }}>
                                                                        Women
                                                                    </Typography>
                                                                </MenuItem>
                                                                {['The Holiday Party Shop', 'Tartan Time', 'Olympia Picks', 'The World Remix', 'The Sun Shop', 'The Ski Shop', 'Family Matching Moments'].map((ele, index) => (
                                                                    <MenuItem onClick={handleClose} key={index}>{ele}</MenuItem>
                                                                )
                                                                )}
                                                            </Box>
                                                            <Box sx={{ padding: 1 }}>
                                                                <MenuItem onClick={handleClose}>
                                                                    <Typography sx={{ fontWeight: 600, color: '#343434', mb: 0 }}>
                                                                        Men
                                                                    </Typography>
                                                                </MenuItem>
                                                                {['Fair Isle Sweaters', 'The Holiday Party Shop', 'Midweight Flannel ', 'New Parkas & Top', 'Source Materials', 'Heritage oz Fleece', 'Beams Plus XJ Crew'].map((ele, index) => (
                                                                    <MenuItem onClick={handleClose} key={index}>{ele}</MenuItem>
                                                                )
                                                                )}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ padding: 1, paddingRight: 3 }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ fontWeight: 700, color: '#343434', mb: 0 }}>
                                                                BookMark These
                                                            </Typography>
                                                        </MenuItem>
                                                        <Box sx={{ display: 'flex', gap: 0 }}>
                                                            <div width="180px" padding="5px">
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_new_img0.jpg" height="200px" width="100%"></img>
                                                                <p>The Holiday <br></br>Party Shop</p>
                                                            </div>
                                                            <div width="180px" padding="5px">
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_new_img1.jpg" height="200px" width="100%"></img>
                                                                <p>The Sun Shop</p>
                                                            </div>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            }
                                            {/* Menu Women For Big Screen */}
                                            {hoverMenu === "WOMEN" &&
                                                <Box sx={{ display: 'flex', width: '80vw', margin: 'auto' }}>
                                                    <Box>
                                                        <Box sx={{ padding: 1 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 800, color: 'gray', mb: 1 }}>
                                                                    WOMEN
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>New Arrivals</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Gifts</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Best Sellers</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Top Rated</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Brands We Loves</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Shop All</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Sale</MenuItem>
                                                        </Box>
                                                        <Box sx={{ padding: 1 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 600, color: '#343434', mb: 1 }}>
                                                                    What To Shop Now
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>The Holiday Party Shop</MenuItem>
                                                            <MenuItem onClick={handleClose}>Tartan Time</MenuItem>
                                                            <MenuItem onClick={handleClose}>Olympia's Picks</MenuItem>
                                                            <MenuItem onClick={handleClose}>The Work Remix</MenuItem>
                                                            <MenuItem onClick={handleClose}>The Ski Shop</MenuItem>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ padding: 1 }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ fontWeight: 600, color: '#343434', mb: 1 }}>
                                                                Clothing
                                                            </Typography>
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/alldata">All Clothing</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Sweaters</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Shirts & Tops</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">T-shirts & Tank</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Dresses & Jumpsuits</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Blazzers</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Pants</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Denims</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Coats & Jackets</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Skirts</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Shorts</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Swimwear</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Active</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/women">Matching Sets</Link></MenuItem>
                                                    </Box>

                                                    <Box>
                                                        <Box sx={{ paddingRight: 2, padding: 1 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 700, color: '#343434', mb: 1 }}>
                                                                    Shoes & Boots
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>All Shoes & Boots</MenuItem>
                                                            <MenuItem onClick={handleClose}>Winter Boots</MenuItem>
                                                            <MenuItem onClick={handleClose}>Boots</MenuItem>
                                                            <MenuItem onClick={handleClose}>Slippers</MenuItem>
                                                            <MenuItem onClick={handleClose}>Flats</MenuItem>
                                                            <MenuItem onClick={handleClose}>Heels</MenuItem>
                                                            <MenuItem onClick={handleClose}>Sneakers</MenuItem>
                                                        </Box>
                                                        <Box sx={{ paddingRight: 2 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 700, color: '#343434', mb: 1 }}>
                                                                    Accessories
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>All Accessories</MenuItem>
                                                            <MenuItem onClick={handleClose}>Jewelry</MenuItem>
                                                            <MenuItem onClick={handleClose}>Bags</MenuItem>
                                                            <MenuItem onClick={handleClose}>Hats Scarves</MenuItem>
                                                            <MenuItem onClick={handleClose}>Accessories & More</MenuItem>
                                                            <MenuItem onClick={handleClose}>Hair</MenuItem>
                                                            <MenuItem onClick={handleClose}>Belts</MenuItem>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ padding: 1, paddingRight: 3 }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ fontWeight: 700, color: '#343434', mb: 0 }}>
                                                                Shop Stories and More
                                                            </Typography>
                                                        </MenuItem>
                                                        <Box sx={{ display: 'flex', gap: 3 }}>
                                                            <div width="180px" padding="5px">
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img0.jpg" height="200px" width="100%"></img>
                                                                <p>New Arrival</p>
                                                            </div>
                                                            <div width="180px" padding="5px">
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img1.jpg" height="200px" width="100%"></img>
                                                                <p>Holiday Party</p>
                                                            </div>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
                                                            <div width="100px" >
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img4.jpg" height="130px" width="100px"></img>
                                                                <p>New Arrival</p>
                                                            </div>
                                                            <div width="100px" >
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img3.jpg" height="130px" width="100px"></img>
                                                                <p>Holiday Party</p>
                                                            </div>
                                                            <div width="100px" >
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img2.jpg" height="130px" width="100px"></img>
                                                                <p>Holiday Party</p>
                                                            </div>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            }

                                            {/* Menu Men For Big Screen */}
                                            {hoverMenu === "MEN" &&
                                                <Box sx={{ display: 'flex', width: '80vw', margin: 'auto' }}>
                                                    <Box>
                                                        <Box sx={{ padding: 1 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 800, color: 'gray', mb: 1 }}>
                                                                    MEN
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>New Arrivals</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Gifts</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Best Sellers</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Top Rated</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Brands We Loves</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Shop All</MenuItem>
                                                            <MenuItem onClick={handleClose} sx={{ fontWeight: 550, color: "#36454F" }}>Sale</MenuItem>
                                                        </Box>
                                                        <Box sx={{ padding: 1 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 600, color: '#343434', mb: 1 }}>
                                                                    What To Shop Now
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>The Holiday Party Shop</MenuItem>
                                                            <MenuItem onClick={handleClose}>Tartan Time</MenuItem>
                                                            <MenuItem onClick={handleClose}>Olympia's Picks</MenuItem>
                                                            <MenuItem onClick={handleClose}>The Work Remix</MenuItem>
                                                            <MenuItem onClick={handleClose}>The Ski Shop</MenuItem>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ padding: 1 }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ fontWeight: 600, color: '#343434', mb: 1 }}>
                                                                Clothing
                                                            </Typography>
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/alldata">All Clothing</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Sweaters</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Shirts & Tops</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">T-shirts & Tank</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Dresses & Jumpsuits</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Blazzers</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Pants</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Denims</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Coats & Jackets</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Skirts</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Shorts</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Swimwear</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Active</Link></MenuItem>
                                                        <MenuItem onClick={handleClose}><Link to="/men">Matching Sets</Link></MenuItem>
                                                    </Box>

                                                    <Box>
                                                        <Box sx={{ paddingRight: 2, padding: 1 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 700, color: '#343434', mb: 1 }}>
                                                                    Shoes & Boots
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>All Shoes & Boots</MenuItem>
                                                            <MenuItem onClick={handleClose}>Winter Boots</MenuItem>
                                                            <MenuItem onClick={handleClose}>Boots</MenuItem>
                                                            <MenuItem onClick={handleClose}>Slippers</MenuItem>
                                                            <MenuItem onClick={handleClose}>Flats</MenuItem>
                                                            <MenuItem onClick={handleClose}>Heels</MenuItem>
                                                            <MenuItem onClick={handleClose}>Sneakers</MenuItem>
                                                        </Box>
                                                        <Box sx={{ paddingRight: 2 }}>
                                                            <MenuItem onClick={handleClose}>
                                                                <Typography sx={{ fontWeight: 700, color: '#343434', mb: 1 }}>
                                                                    Accessories
                                                                </Typography>
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>All Accessories</MenuItem>
                                                            <MenuItem onClick={handleClose}>Jewelry</MenuItem>
                                                            <MenuItem onClick={handleClose}>Bags</MenuItem>
                                                            <MenuItem onClick={handleClose}>Hats Scarves</MenuItem>
                                                            <MenuItem onClick={handleClose}>Accessories & More</MenuItem>
                                                            <MenuItem onClick={handleClose}>Hair</MenuItem>
                                                            <MenuItem onClick={handleClose}>Belts</MenuItem>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ padding: 1, paddingRight: 3 }}>
                                                        <MenuItem onClick={handleClose}>
                                                            <Typography sx={{ fontWeight: 700, color: '#343434', mb: 0 }}>
                                                                Shop Stories and More
                                                            </Typography>
                                                        </MenuItem>
                                                        <Box sx={{ display: 'flex', gap: 3 }}>
                                                            <div width="180px" padding="5px">
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img0.jpg" height="200px" width="100%"></img>
                                                                <p>New Arrival</p>
                                                            </div>
                                                            <div width="180px" padding="5px">
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img1.jpg" height="200px" width="100%"></img>
                                                                <p>Holiday Party</p>
                                                            </div>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
                                                            <div width="100px" >
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img4.jpg" height="130px" width="100px"></img>
                                                                <p>New Arrival</p>
                                                            </div>
                                                            <div width="100px" >
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img3.jpg" height="130px" width="100px"></img>
                                                                <p>Holiday Party</p>
                                                            </div>
                                                            <div width="100px" >
                                                                <img src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img2.jpg" height="130px" width="100px"></img>
                                                                <p>Holiday Party</p>
                                                            </div>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            }


                                        </Menu>}
                                </>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: 'none', lg: 'flex', md: 'flex' }, mr: 2, }}
                            component="div"
                            border="2px solid #ddd"
                            width="200px"
                            display="flex"
                            alignItems="center"
                            height="30px"
                            padding="5px">
                            <CiSearch fontSize="25px" />
                            <input className="searchText" type="text" placeholder="Search" />
                        </Box>
                        <Box sx={{ flexGrow: 0, mr: '5px', display: { sm: 'none', md: 'flex', lg: 'flex' } }}>
                            <Tooltip>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {isAuth ?
                                        <>
                                            <p onClick={handleSignout} className="signIn">SignOut</p>
                                        </>
                                        :
                                        <>
                                            <p onClick={handleModalOpen} className="signIn">SignIn</p>
                                            <div>
                                                {!isAuth && <>
                                                    <Modal
                                                        open={modalOpen}
                                                        onClose={handleModalClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >

                                                        {authComponent === 'Login' && !isAuth ? <Login setauthComponent={setauthComponent} /> : <Signup setauthComponent={setauthComponent} />}
                                                    </Modal>
                                                </>}
                                            </div>
                                        </>
                                    }
                                </IconButton>
                            </Tooltip>
                            {/* {userAuth && <Menu
                                sx={{ mt: '50px', mr: '0px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>} */}
                        </Box>

                        <Box sx={{ display: { sm: 'flex', lg: 'flex', md: 'flex' }, mr: 1, }}
                            marginLeft="20px"
                            display="flex"
                            alignItems="center"
                            height="30px"
                            fontSize="25px"
                        >
                            <Link to="/cart">
                                <SlHandbag />
                            </Link>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </NavbarContainer >
    );
}

export default Navbar

const NavbarContainer = stylesc.div`
                width:100%;
                color:black;
                .searchText{
                    height:90%;
                border:none;
                pointerEvents:none;
                outline:none;
    }
                .menuList{
                    width:80%;
                display:flex;
                justify-content:space-between;
    }
                .signIn{
                    font - size:18px;
                font-weight:500;
    }
    a{
        text-decoration:none;
    }
                `;

const MenuContainer = stylesc.div`
                a{
                    text-decoration:none;
                color:black;
    }
                font-size:16px;

                .sizeContain{
                    font - size:14px;
                border:1px solid grey;
                width:30px;
                text-align:center;
                padding:3px 2px;
    }
`;

const ModalContainer = stylesc.div`
        //   border:1px solid red;
          color:black;
          
`