import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartSaga } from "./redux/actions";
import { useFormik } from "formik";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 50,
    marginTop: 30,
    width: "300px",
  },
  media: {
    width: "240px",
    height: "150px",
    marginLeft: 27,
  },
  cart: {
    backgroundColor: "#FF9900",
    color: "#000000",
    marginLeft: 30,
    fontSize: "10px",
  },
  qty: {
    marginLeft: 30,
    marginTop: "-31px",
    width: "40px",
  },
  quan: { width: "25px" },
});

function Checkoutproduct(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const counts = useSelector((state) => state.checkout);
  const formik = useFormik({
    initialValues: {
      link: "",
      price: "",
      year: "",
      ratings: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const removeItemFromCart = () => {
    dispatch(
      removeFromCartSaga({
        image: props.image,
        price: props.price,
        product_id: props.id,
        id: localStorage.getItem("id"),
      })
    );
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent>
          <Typography
            className={classes.price}
            gutterBottom
            variant="h7"
            component="h2"
          >
            Price $ {props.price}
          </Typography>

          <div>
            <p className={classes.quan}>Qty</p>
            <div className={classes.qty}>
              <select
                onChange={formik.handleChange}
                value={formik.values.year}
                className={classes.year}
                name="year"
              >
                <option value="" default selected>
                  {props.qty}
                </option>
                <option value="1999">2</option>
                <option value="1991">3</option>
                <option value="1998">4</option>
                <option value="1994">5</option>
              </select>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={removeItemFromCart}
          className={classes.cart}
          size="small"
        >
          Remove from Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Checkoutproduct;
