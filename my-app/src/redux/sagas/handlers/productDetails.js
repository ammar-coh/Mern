import {call,put,delay} from 'redux-saga/effects';
import { requestDestroyProduct,requestGetProduct,requestUpdateProduct, requestCreateProduct } from '../requests/productDetails';
import { getUser, setUser, updateUserDetails,deleteDetails,addToReducer} from '../../actions/index';



export function* handleGetUser(){
  //const [data]= action
 
    try{
           const response = yield call(requestGetProduct);
            const {data} = response
       
       
        yield put(setUser(data))
} catch(error){
    console.log(error)
}
}

//console.log(handleGetUser)


export function* updateInfo(action){
  console.log('UPDATESaga', action.data)
  try {
     const response = yield call(requestUpdateProduct,action.data);
 // console.log('UPDATESaga', action.data)
  console.log(response.data,'response')
         
        
            yield put(updateUserDetails(response.data))
          
     
  
} catch (error) {
  //console.error('this is error',error)
}
}

export function* deleteInfo(action){

  console.log('delete', action.data)
  try {
   const response = yield call(requestDestroyProduct,action.data)
 // const  {data} = response
            console.log("respo",response.data)
    yield put(deleteDetails(response.data))
  
   
} catch (error) {
  
}
}

export function* addItemInfo(action){

  console.log('create',action.data)
  try {
    const response = yield call(requestCreateProduct,action.data);
    console.log(response.data, 'created')
    yield put(addToReducer(response.data))
} catch (error) {
  
}
}
