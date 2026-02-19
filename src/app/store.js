import { configureStore } from "@reduxjs/toolkit";
import BookingTicketReducer from "../feature/bookSlice";

const store = configureStore({ reducer: { Booking: BookingTicketReducer } });

export default store;
