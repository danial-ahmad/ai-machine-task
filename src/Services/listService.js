import axios from "axios";
import {
  fetchingStart,
  fetchSuccess,
} from "../Redux/Slices/listSlice";

export const getListData = async (dispatch) => {
  dispatch(fetchingStart());
  axios.get('https://jsonplaceholder.typicode.com/albums')
  .then((res) => {
    dispatch(fetchSuccess(res));
  }).catch((err) => {
    console.log(err)
  })
};

