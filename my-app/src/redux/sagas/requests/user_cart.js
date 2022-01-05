import axios from 'axios'; 

export function requestGetProductsToCart(data){
  console.log('allls',data)
  return axios.request({
      method:'get',
      url:`http://localhost:8081/cart/user-cart`,

      params:{id: data},

      headers:{Authorization: ` ${localStorage.getItem('Authorization')}`}

  })
}

export function requestAddProductsToCart(data){
    return axios.request({
        method:'post',
        url:`http://localhost:8081/cart/user-cart`,
       data:{id:data.id, product_id: data.product_id  },
       headers:{Authorization: `${localStorage.getItem('Authorization')}`}


    })
}

export function requestDeleteProductsFromCart(data){
  return axios.request({
      method:'delete',
      url:`http://localhost:8081/cart/user-cart`,
      data: {id: data.id,
        product_id: data.product_id
      },
     
      headers:{Authorization: `${localStorage.getItem('Authorization')}`}

  })
}
