import { useDispatch, useSelector } from "react-redux";
import { BOOKING } from "../feature/bookSlice";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Booking = () => {
  const dispatch = useDispatch();
  const Booking = useSelector((state) => state.Booking.Booking);
  const [bookingData, setBookingData] = useState({
    from: "",
    to: "",
    date: "",
    guest: "",
    travelClass: "",
  });

  const changeHandler = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const BookHandler = (e) => {
    e.preventDefault();
    dispatch(BOOKING({ ...bookingData, id: Date.now() }));
  };

  return (
    <div className="bg-white rounded-md max-w-6xl w-full mx-auto shadow-md p-4 mt-8">
      <form onSubmit={BookHandler} className="grid grid-cols-6 gap-4">
        {/* Destination From */}
        <div className="col-span-1 py-2 px-3 border-r border-gray-200">
          <label className="text-sm font-medium block mb-1">
            Destination From
          </label>
          <select
            name="from"
            onChange={changeHandler}
            className="p-2 border w-full rounded-md outline-none"
          >
            <option value="">Select</option>
            <option value="new york">New York</option>
            <option value="london">London</option>
            <option value="iran">Iran</option>
            <option value="rome">Rome</option>
          </select>
        </div>

        {/* Destination To */}
        <div className="col-span-1 py-2 px-3 border-r border-gray-200">
          <label className="text-sm font-medium block mb-1">
            Destination To
          </label>
          <select
            name="to"
            onChange={changeHandler}
            className="p-2 border w-full rounded-md outline-none"
          >
            <option value="">Select</option>
            <option value="new york">New York</option>
            <option value="london">London</option>
            <option value="iran">Iran</option>
            <option value="rome">Rome</option>
          </select>
        </div>

        {/* Journey Date */}
        <div className="col-span-1 py-2 px-3 border-r border-gray-200">
          <label className="text-sm font-medium block mb-1">Journey Date</label>
          <input
            type="date"
            name="date"
            onChange={changeHandler}
            className="p-2 border w-full rounded-md outline-none"
          />
        </div>

        {/* Guest */}
        <div className="col-span-1 py-2 px-3 border-r border-gray-200">
          <label className="text-sm font-medium block mb-1">Guest</label>
          <select
            name="guest"
            onChange={changeHandler}
            className="p-2 border w-full rounded-md outline-none"
          >
            <option value="">Select</option>
            <option value="1 Person">1 Person</option>
            <option value="2 Persons">2 Persons</option>
            <option value="3 Persons">3 Persons</option>
            <option value="4 Persons">4 Persons</option>
          </select>
        </div>

        {/* Travel Class */}
        <div className="col-span-1 py-2 px-3 border-r border-gray-200">
          <label className="text-sm font-medium block mb-1">Travel Class</label>
          <select
            name="travelClass"
            onChange={changeHandler}
            className="p-2 border w-full rounded-md outline-none"
          >
            <option value="">Select</option>
            <option value="business">Business</option>
            <option value="economy">Economy</option>
          </select>
        </div>

        <div className="col-span-1 flex justify-center items-center bg-indigo-600 rounded-r-md">
          <button
            type="submit"
            className="text-white flex items-center gap-1 font-medium"
          >
            <FaPlus />
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
