import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useHistory, Redirect}  from 'react-router-dom';
import Cart from './Cart';
import Sign_in from './sign_in';
import { sign_in_reducer, addToCartReducer , resetCart} from './redux/actions';
// import HomeIcon from '@mui/icons-material/Home';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineHome } from "react-icons/ai";


const useStyles = makeStyles({
    root: {
        backgroundColor: "#131921",
        width: "100%",
        height:"50px",
        border: "solid black"
    },
    home:{
       
        width:"70px",
        color:"white", 
       textDecoration:"none",
        marginTop:"-40px"
    },
    home_link:{
        textDecoration:"none"
    },
    sign_out:{
      backgroundColor:"#FF9900",  
      marginLeft: 12,
      fontSize: "10px",
      marginTop:"-50px",
      marginLeft:"1380px",
    },
    icon:{
            marginTop:"-35px",
            fontSize:"20px",
          marginLeft:"40px",
            color:"white"
    }
});

function Header() {
    const classes = useStyles();
    const dispatch=useDispatch()
    const history = useHistory()
    return (
        <div>
            <div className={classes.root}>
            <Cart/>
            <Sign_in/>
    
            <Link className={classes.home_link} to="/">
            {/* <h2 className={classes.home}>  Home   </h2>   */}
            {/* <HomeOutlinedIcon/>     */}
         <div className={classes.icon}> <AiOutlineHome/></div>
           </Link>:
        
         
        { localStorage.getItem('Authorization')?
            <Button className={classes.sign_out}  size="small" onClick = {()=>{
                
                dispatch
                (sign_in_reducer({}))
                dispatch (resetCart())
                localStorage.removeItem('Authorization')
                localStorage.removeItem('cart')
                localStorage.removeItem('user_details')
                localStorage.removeItem('id')
               
                history.push("/login_page")}}  >  Sign out  </Button> : null   }  
          
            </div>
        </div>
    )
}

export default Header
