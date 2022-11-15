import { GET_PRODUCT_LOADING,GET_PRODUCT_ERROR ,GET_PRODUCT_SUCESS} from "./types.product";


let initialstate={
    loading:false,
    error:false,
    data:[]
}

export const ProductReducer=(state=initialstate,{type,payload})=>{
    switch (type){
case GET_PRODUCT_LOADING:{
    return {
...state,
loading:true,
error:false
    }
}

case GET_PRODUCT_SUCESS:{
    return {
        ...state,
        loading:false,
        error:false,
        data:payload
    }
}
case GET_PRODUCT_ERROR:{
    return {
        ...state,
        loading:false,
        error:true
    }
}        
        default:{
            return state
            
        }
    }
}