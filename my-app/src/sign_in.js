import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { BsPerson } from "react-icons/bs";

const useStyles = makeStyles({
  root: {
    width: "200px",
    marginLeft: "500px",
    display: "flex",
    width: "120px",
    height: "50px",
    marginTop: "-45px",
    border: "none",
  },

  user: {
    textDecoration: "none",
    color: "white",
    marginLeft: "12px",
    marginTop: "17px",
  },

  hello: { color: "white" },

  login_link: { border:'0.5px', marginTop:'17px' ,color:'black',
fontSize:'20px',
},

  current_user: { color: "white", marginLeft: "12px" },
});

function Sign_in() {
  const classes = useStyles();
  var user_name = localStorage.getItem("user_details");
  var checkUserLoggedIn = user_name?.length > 0;

  return (
    <div className={classes.root}>
      <p className={classes.hello}>Hello,</p>

      {checkUserLoggedIn == true ? (
        <p className={classes.current_user}>{user_name}</p>
      ) : (
        <Link className={classes.login_link} to="/login_page">
        <BsPerson/>
    </Link>
      )}
    </div>
  );
}

export default Sign_in;
