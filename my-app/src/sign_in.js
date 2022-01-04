import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
//import { mergeClasses } from '@material-ui/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        
        width:"200px",
      
        marginLeft:"500px",
        display:'flex',
        width:"120px",
        height:"50px",
        marginTop:"-45px",
        border: "none",
        // '&:hover': {
        //   border:" 1px solid white",
        // },
    },
    user:{
        // fontSize:"15px !important",
        textDecoration:"none", 
        color:"white", 
        marginLeft:"12px", 
        marginTop:"17px",
    },
    hello:{
        color:"white", 
    },
    login_link:{
        textDecoration:"none"
    },
    current_user:{
        color:"white", 
        marginLeft:"12px", 
       

    }
});

function Sign_in() {

    const classes = useStyles();
    const user = useSelector((state) => state.user_login.details);
    console.log("final", user?.user_name)
    var user_name = localStorage.getItem('user_details')
    console.log(user_name?.length)
    return (
        <div className={classes.root}>
            <p className={classes.hello}>Hello,</p>
           
            { user_name?.length >0  ? <p className={classes.current_user}>{user_name}</p>
             :
            <Link  className={classes.login_link} to='/login_page'>
                 <p className={classes.user}>Sign_in</p>
            </Link>
            }
        </div>
    )
}

export default Sign_in
