import {GET_NUMBERS_BASKET} from './types';

 export const getNumbers = () => {
    return(dispatch) => {
        console.log("Get Basket Number");
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
 } 

 