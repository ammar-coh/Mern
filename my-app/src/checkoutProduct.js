import React from 'react';
//import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//import { useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useSelector,useDispatch } from "react-redux";
import { removeFromCartSaga} from "./redux/actions";
import {useFormik} from 'formik';





const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginLeft:50,
      marginTop:30,
      width:'300px',
    },
    media: {
      width:'240px',
      height:'150px',
      marginLeft:27,
    },
    cart:{
        backgroundColor:'#FF9900',
        color:'#000000',
        marginLeft:30,
        fontSize:'10px',
    },
    qty:{
      marginLeft:30,
      marginTop:"-31px",
      // border:"1px solid black",
      width:"40px"

      
    },
    quan:{
            // border:"1px solid black",
            width:"25px"
    }
  });

function Checkoutproduct(props) {
 // console.warn('matrial',props)
    const classes = useStyles();
    const counts = useSelector((state) => state.checkout);
   console.log("tired", counts)
   var qty = 1
   var spread = [...counts]
   var maps = spread.map(i=>{if (i.id== props.id){
    return i
   }})
   var filtered = maps.filter(function(i){
     return i != undefined
   })
   console.log("filtered", filtered)
  //  const filt = counts.filter((element, index)=>
  //   counts.indexOf(element) === index
  // //  console.log(props.id)
  //  )
   console.log("spread",maps)
//    const toFindDuplicates = counts => counts.filter((item, index) => counts.indexOf(item) !== index)
// const duplicateElementa = toFindDuplicates(counts);
// console.log(duplicateElementa)
//   //  const quantity = counts.map(i=>{ if (i===i){

  //  }

  //  })
  //  console.log("qty",quantity)
  //  const qt = quantity.map(i=>{if(i != undefined ){
  //   var empty=[] 
  //   return empty.push(i)
  //  }})
  //  console.log("qt",qt)
   const dispatch = useDispatch()
   const formik = useFormik({
    initialValues:{
        link:'',
        price:'',
        year:'',
        ratings:'',
    },
    onSubmit: values=>{
                alert(JSON.stringify(values,null,2))
    }
})
   

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
           image={props.image}
           
          />
           <CardContent>
          <Typography  className={classes.price} gutterBottom variant="h7" component="h2">
           Price $ {props.price}
          </Typography>
         {/**  <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>*/}
          <div>
            <p className={classes.quan}>Qty</p>
            <div className={classes.qty}>
           <select  onChange={formik.handleChange} value={formik.values.year} className={classes.year} name='year'>
           <option value="" default selected>{props.qty}</option>
           <option value="1999">2</option>
    <option value="1991">3</option>
    <option value="1998">4</option>
    <option value="1994">5</option>
    </select>
    </div>
    </div>
        </CardContent>
          {/*<CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>*/}
        </CardActionArea>
        <CardActions>
          <Button onClick={()=>{
            dispatch(removeFromCartSaga({image: props.image,
            price:props.price,
            product_id: props.id,
          id: localStorage.getItem('id')}))
          }} className= {classes.cart} size="small" >
         Remove from Cart
          </Button>
         
        </CardActions>
      </Card>
    )
}

export default Checkoutproduct
