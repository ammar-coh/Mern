import './App.css';
import Product from './product';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import checkout from './checkout';
import Sidebar from './sideBar'
import AddProduct from './addProduct'
import Del from './Del'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, sign_in_reducer, getProductsToCartSaga, getSign_In, sign_in_saga } from './redux/actions';
import Header from './header'
import Login_page from './login_page'
import Sign_up from './sign_up'

// import { FaWindows } from 'react-icons/fa';



function App() {
  const dispatch = useDispatch();
  const counts = useSelector((state) => state.checkout)
  const uname = useSelector((state) => state.user_login.details)
  //  console.log("imported", uname?.user_name)

  
  useEffect(() => {
    localStorage.getItem('Authorization') && dispatch(getUser()); {/** localStorage.getItem('authorization')&& */}

  }, ); //[uname?.user_name]
  // useEffect(() => { dispatch(getSign_In(localStorage.getItem('for_reducer')));

  // }, []);


  // useEffect(() => {
  //   localStorage.getItem('Authorization')&& dispatch(sign_in_reducer(JSON.parse(localStorage.getItem('for_reducer'))))
  // }, [])
  useEffect(() => {
    localStorage.getItem('Authorization')&& dispatch(getProductsToCartSaga(localStorage.getItem('id')))
  },[localStorage.getItem('id')] )  //[uname?.user_name]

  // const update= useSelector((state) => state.productDetails.details);

  // console.log(update)
  const history = useHistory()

  return (
    <div >
      <Router>
        <Header />



{console.log(`localStorage.getItem('user_details')`, localStorage.getItem('user_details'))}
        <Switch>
          <Route path='/login_page' exact component={Login_page} />
          <Route path='/sign_up' exact component={Sign_up} />
          <Route path='/products/add' exact component={AddProduct} />
          <Route path='/products/del' exact component={Del} />
          { localStorage.getItem('user_details')?
          <Route path='/checkout' exact component={checkout} />:<Route path='/login_page' exact component={Login_page} />
        }
          { localStorage.getItem('user_details')?
          <Route path='/' exact component={Product}/>: <Route path='/login_page' exact component={Login_page} />
        }
        
          <Route path='*'  component={Login_page} />
        </Switch>
      </Router>
    </div>
  );
}

export default App