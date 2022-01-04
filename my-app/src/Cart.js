import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root:{
                marginLeft:'900px',
               marginTop:'5px',
                display:'flex',
                top:"0px",
            
                width:"60px",
                height:"40px",
                border: "none",
                // '&:hover': {
                //   border:" 1px solid white",
                // },
              
    },

    icon: {
     color:'white',
     marginLeft:"0px",
     marginTop:"10px",
    
     width:"100px",
    
    },
    count:{
            marginTop:'0px', 
            color:'white',
            textDecoration:'none',
            margin: "0px",
           
            width:"5px", 
            padding:"10px"
    },
    checkout_link:{
      textDecoration:"none"
    }
   
  });

function Cart() {
    const classes = useStyles()
    const counts= useSelector((state)=> state.checkout)
   console.log("carts count",counts)
   var sum = 0
   var totalCount = counts.map(i=>{
     
     sum += i.qty
   })
   var itemsCount= sum
    return (
      
      <Link  className= {classes.checkout_link} to='/checkout'>
           
        <div className={classes.root}>
         
           <h3 className={classes.count}>{itemsCount}</h3>
        
            
           <span className={classes.icon}>
               
                <AddShoppingCartIcon/>
             </span> 
          
          
         
        </div>
        </Link >
           
    )
}

export default Cart
