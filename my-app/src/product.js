import React, { useEffect } from "react";
import { getUser } from "./redux/actions/index";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemContainer from "./ItemContainer";
import { useSelector, useDispatch } from "react-redux";
import { withRouter}  from 'react-router-dom';

import Entry from "./newEntrry";
const useStyles = makeStyles({
  root: {
    display: "flex",
    gridGap: '40px 120px',
    marginLeft:"150px", 
   
    
   

   
  },

  add_product:{
    marginLeft: "250px",
   
  },
  
});

function Product() {
  const classes = useStyles();
  const details = useSelector((state) => state.productDetails.details);
  const header = useSelector((state) => state.productDetails.header);
  const user = useSelector((state)=> state.user_login.details)

  
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.getItem('authorization') && dispatch(getUser());
   }, []);
  
  //const {image}= details
  //console.log(details, "details");
  return (
    <div>
     
      <div className={classes.root}>
        {/*<Grid item>*/}
        {details.length > 0 &&
          details.map((i) => (
            <div >
              <ItemContainer
                image={i?.image}
                price={i.price}
                year={i.year}
                id={i._id}
                rating={i.ratings}
              />
            </div>
          ))}
      </div>    { localStorage.getItem("role")==='admin'?
                <div className={classes.add_product}>
                   <Entry/>
                  </div>:null
                  }
      {/**  </Grid>*/}
    </div>
  );
}

export default  Product;
