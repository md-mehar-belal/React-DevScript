import {configureStore} from "@reduxjs/toolkit"
import { devSlicePaste } from "./devSlice"

export const store = configureStore({
  reducer:{
    devSlice: devSlicePaste.reducer,
  }
})