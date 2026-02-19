import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Booking: [],
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    BOOKING: (state, action) => {
      const newData = [...state.Booking];
      newData.push(action.payload);
      return { Booking: newData };
    },
    DELETE: (state, action) => {
      const filterData = state.Booking.filter(
        (item) => item.id !== action.payload.id,
      );
      return { Booking: filterData };
    },
  },
});

export default BookingSlice.reducer;
export const { BOOKING, DELETE } = BookingSlice.actions;
