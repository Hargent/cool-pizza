

import { createSlice } from "@reduxjs/toolkit"
import { REDUCERS } from "../../utils/constants/constants"

import { State } from "../../utils/types/state-types"
import fetchAddress from "./user-thunk"




const initialState ={
  userName: "",
  status: "idle",
  position: {},
  address: "",
  error:""
}
const useSlice = createSlice({
  name: REDUCERS.USER,
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload
    }
  },
  extraReducers: (builders) => (
    builders
      .addCase(fetchAddress.pending, (state ) => { state.status = "loading" })
      
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position
        state.address = action.payload.address
        state.status = "idle"
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.error ="There was a problem getting your address. Make sure to fil this field!"
       state.status ="error"
    })
  )
})
export const getUserName = (state:State)=>state.user.userName
export const {updateName}  =  useSlice.actions

export default useSlice.reducer