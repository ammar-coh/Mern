import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory, Redirect } from "react-router-dom";
import Cart from "./Cart";
import Sign_in from "./sign_in";
import { sign_in_reducer, addToCartReducer, resetCart } from "./redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillLayout, AiOutlineHome } from "react-icons/ai";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FCB800",
    width: "100%",
    height: "40px",
    borderBottom: "1px solid rgba(0,0,0,.15)",
    // visibility:"hidden",
    //border:"1px solid black",
    // animation:`$load 5000ms ease-in-out`,
    paddingTop: "25px ",
    paddingRight: "0px",
  },

  left_container: {
    // border: "1px solid black",
    display: "flex",
    width:'238px',
    gap:"50px",
    marginLeft:"130px",
    height:"40px",
    // paddingTop:"5px",
    // paddingBottom:"5px",
  },

  sign_out: {
    backgroundColor: "#FF9900",
    marginLeft: 12,
    fontSize: "10px",
    marginTop: "-50px",
    marginLeft: "1380px",
  },
  home_link:{
    textDecoration:"none",
  },

  home_text: {
    color: "#000000",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "16px",
    fontFamily: "Work Sans, sans-serif",
    lineHeight: "20px",

    width: "50px",
  },
  about_text: {
    color: "#000000",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "16px",
    fontFamily: "Work Sans, sans-serif",
    lineHeight: "20px",

    width: "50px",
  },
  about_link:{
    textDecoration:"none",
  },
   shop_text: {
    color: "#000000",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "16px",
    fontFamily: "Work Sans, sans-serif",
    lineHeight: "20px",

    width: "50px",
  },
  shop_link:{
    textDecoration:"none",
  },

});

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLoggedIn = localStorage.getItem("Authorization");
  const history = useHistory();
  const logout = () => {
    dispatch(sign_in_reducer({}));
    dispatch(resetCart());
    localStorage.removeItem("Authorization");
    localStorage.removeItem("cart");
    localStorage.removeItem("user_details");
    localStorage.removeItem("id");
    history.push("/login_page");
  };
  return (
    <div className={classes.root}>
      {/** left-container*/}
      <div className={classes.left_container}>
        <Link className={classes.home_link} to="/">
          <p className={classes.home_text}>Home</p>
        </Link>
        <Link className={classes.about_link} to="/">
          <p className={classes.about_text}>About</p>
        </Link>
        <Link className={classes.shop_link} to="/">
          <p className={classes.shop_text}>Shop</p>
        </Link>
      </div>
      {/** right-container */}
      <div className={classes.right_container}>
        <Cart />
        <Sign_in />
        {userLoggedIn ? (
          <Button className={classes.sign_out} size="small" onClick={logout}>
            Sign out
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
