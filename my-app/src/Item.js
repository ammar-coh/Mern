/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { addToCartSaga, updateUser, deleteDispatch } from "./redux/actions";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
// import {FaStar} from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    marginLeft: "0px",
    marginTop: 90,
    width: "300px",
    height: "320px",
    boxSizing: "border-box",
  },

  media: { width: "240px", height: "150px", marginLeft: 27 },

  update: {
    fontSize: "10px",
    marginLeft: "124px",
    marginTop: "-32px",
    color: "#FF9900",
    width: "26px",
  },

  cart: {
    backgroundColor: "#FF9900",
    color: "#000000",
    marginLeft: 102,
    fontSize: "10px",
  },

  price: { marginLeft: 92, fontSize: "15px" },
  input: { width: "70px", marginTop: 5, marginLeft: 52, fontSize: "10px" },

  del: {
    hover: {
      "&:hover": { cursor: "pointer" },
    },
  },
  ratings: { marginLeft: 80 },
});

function Item({ image, price, id, year }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [finalUpdatedPrice, updatedPrice] = useState();
  const getPriceFromInput = (event) => {
    updatedPrice(event.target.value);
  };
  const newPrice = parseInt(finalUpdatedPrice);
  const addItemToCart = () => {
    dispatch(addToCartSaga({ id: localStorage.getItem("id"), product_id: id }));
  };
  const deleteItem = () => {
    dispatch(deleteDispatch({ image: image, price: price, id: id }));
  };
  const updatePrice = () => {
    dispatch(updateUser({ id: id, price: newPrice }));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h2">
            {year}
          </Typography>

          <Typography
            className={classes.price}
            gutterBottom
            variant="h7"
            component="h2"
          >
            Price $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button onClick={addItemToCart} className={classes.cart} size="small">
          Add to Cart{" "}
        </Button>

        {localStorage.getItem("role") === "admin" ? (
          <BsTrash onClick={deleteItem} className={classes.del} />
        ) : null}
      </CardActions>

      {localStorage.getItem("role") === "admin" ? (
        <input
          className={classes.input}
          placeholder="update price"
          type="number"
          onChange={getPriceFromInput}
        />
      ) : null}

      {localStorage.getItem("role") === "admin" ? (
        <CardActions>
          <GrUpdate className={classes.update} onClick={updatePrice} />
        </CardActions>
      ) : null}
    </Card>
  );
}

export default Item;











// eslint-disable-next-line no-lone-blocks
{
  /*
      const colors = {orange: "#FFBA5A",grey: "#a9a9a9",};
      const dispatchTwo = useDispatch();
      const ratings = Array(5).fill(0);
      const [currentRating, setRating] = useState(0);
      const [currentHoverValue, setHoverValue] = useState(undefined);
      const [rats, setRats] = useState(rating);
      //console.log(rats)
      const handleRats = (value) => {
        setRats(value);
      };
      // console.log(rats)

      const handleClickRat = (value) => {
        setRating(value);
      };
      const handleHover = (v) => {
        setHoverValue(v);
      };
      const handleMouseLeave = () => {
        setHoverValue(undefined);
      };*/
}

{
  /** <div className={classes.ratings}>
                {rating >= 1
                  ? ratings.map((_, index) => {
                   //   console.log("index", index);
                      return (
                        <FaStar
                          key={index}
                          style={{ cursor: "cursor", marginRight: 50 }}
                          color={rating > index ? colors.orange : colors.grey}
                          onClick={
                            () => dispatchTwo(updateUser({ ratings: index + 1,id: id }))
                            //handleClickRat(index +1)
                          }
                          onHover={() => handleHover(index + 1)}
                          onMouseLeave={handleMouseLeave}
                        />
                      );
                    })
                  : ratings.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          style={{ cursor: "cursor", marginRight: 10 }}
                          color={
                            (currentRating || currentHoverValue) > index
                              ? colors.orange
                              : colors.grey
                          }
                          /*onClick={() => handleClickRat(index + 1)}
                          onClick={() => dispatchTwo(updateUser({ ratings: index + 1,id: id }))}
                          onHover={() => handleHover(index + 1)}
                          onMouseLeave={handleMouseLeave}
                        />
                      );
                    })}
                  </div> */
}
