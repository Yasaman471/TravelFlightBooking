import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Booking: [],
};

const BookingSlice = createSlice({
  name: "Booking",
  initialState,
  reducers: {
    BOOKING: (state, action) => {
      state.Booking.push(action.payload);
    },
    DELETE: (state, action) => {
      state.Booking = state.Booking.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export default BookingSlice.reducer;
export const { BOOKING, DELETE } = BookingSlice.actions;
