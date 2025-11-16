import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
  devSlices: localStorage.getItem("devSlices")
    ? JSON.parse(localStorage.getItem("devSlices"))
    : [],
}

export const devSlicePaste = createSlice({
  name: 'devSlice',
  initialState,
  reducers: {
    addToDevSlices: (state, action) => {
      const devSlice = action.payload;
      const index = state.devSlices.findIndex((item) => item._id === devSlice._id);

      if (index >= 0) {
        toast.error("DevSlice already exist");
        return;
      }

      state.devSlices.push(devSlice);
      localStorage.setItem("devSlices", JSON.stringify(state.devSlices));

      toast.success("DevSlice Created Successfully")
    },
    updateToDevSlices: (state, action) => {
      const updatedDevSlice = action.payload;
      const index = state.devSlices.findIndex((item) => item._id === updatedDevSlice._id);

      if (index >= 0) {
        state.devSlices[index] = updatedDevSlice;
        localStorage.setItem("devSlices", JSON.stringify(state.devSlices));

        toast.success("DevSlice Updated Successfully")
      }
    },
    resetAllDevSlices: (state) => {
      state.devSlices = [];
      localStorage.removeItem("devSlices");

      toast.success("All DevSlices are removed")
    },
    removeFromDevSlices: (state, action) => {
      const devSliceId = action.payload;

      console.log(devSliceId);
      const index = state.devSlices.findIndex((item) => item._id === devSliceId);

      if (index >= 0) {
        state.devSlices.splice(index, 1);

        localStorage.setItem("devSlices", JSON.stringify(state.devSlices));

        toast.success("DevSlice Removed Successfully")
      }
    },
  },
})

export const { addToDevSlices, updateToDevSlices, resetAllDevSlices, removeFromDevSlices } = devSlicePaste.actions
export default devSlicePaste.reducer
