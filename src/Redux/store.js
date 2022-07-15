import {configureStore} from "@reduxjs/toolkit"
import listReducer from "./Slices/listSlice";
const Store = configureStore({
  reducer : {
    list: listReducer,
  },
}) 
export default Store;