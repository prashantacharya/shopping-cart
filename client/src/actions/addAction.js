import axios from 'axios'
import {ADD_PRODUCTS_BASKET} from './types'

export const addBasket = productName =>  async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
        try {
            const res = await axios.post('/api/products', productName, config)
            dispatch({
                type: ADD_PRODUCTS_BASKET,
                payload: res.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
