import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemContainer from "./ItemContainer";
import { useSelector } from "react-redux";
import Entry from "./newEntrry";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gridGap: "-0px 149px",
    [theme.breakpoints.up("lg")]: {
      flexWrap: "wrap",
      marginLeft: "130px",
      width: "1200px",
    },
  },
  cards: {
    gridGap: "-0px 149px",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("lg")]: {},
  },
  add_product: {
    marginLeft: "250px",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "130px",
    },
  },
}));

function Product() {
  const classes = useStyles();
  const productArray = useSelector((state) => state.productDetails.details);
  const products = productArray.length > 0;
  const userRole = localStorage.getItem("role") === "admin";
  const getListOfProducts = productArray.map((i) => (
    <div>
      <ItemContainer
        image={i?.image}
        price={i.price}
        year={i.year}
        id={i._id}
        rating={i.ratings}
      />
    </div>
  ));
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.cards}>
          {products == true > 0 && getListOfProducts}
        </div>
      </div>
      {userRole == true ? (
        <div className={classes.add_product}>
          <Entry />
        </div>
      ) : null}
    </div>
  );
}

export default Product;
