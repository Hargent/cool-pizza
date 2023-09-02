import { ADDRESS_TYPE, COORDINATE_TYPE, POSITION_TYPE } from "../../utils/types/data-types";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAddress } from "../../services/api-geocoding";

const getPosition =()=> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  const positionObj= await getPosition() as POSITION_TYPE;
  const position:COORDINATE_TYPE = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position) as ADDRESS_TYPE;
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  // console.log(position ,address+ "the position and address of the geolocation");
  
  return { position, address };
})
console.log(typeof fetchAddress);


export default fetchAddress 