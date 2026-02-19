import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { BOOKING } from "../feature/bookSlice";

function Booking() {
  const dispatch = useDispatch();
  const Booking = useSelector((store) => store.Booking.Booking);
  const [bookingData, setBookingData] = useState({
    from: "",
    to: "",
    date: "",
    guest: "",
    travelClass: "",
  });

  const BookHandler = (e) => {
    e.preventDefault();
    Object.keys(bookingData).length === 5
      ? (dispatch(BOOKING({ ...bookingData, id: Date.now() })),
        setBookingData({
          from: "",
          to: "",
          date: "",
          guest: "",
          travelClass: "",
        }))
      : alert("Please Select data Properly!");
  };

  const changeHandler = (e) => {
    setBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="md:mt-40 mt-24 mx-4 relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="flex flex-col md:flex-row">
          {/* form */}
          <div className="py-1.5 px-2.5 flex-1 border-r border-gray-200">
            <p>Destination From</p>
            <div className="flex flex-row">
              <select
                name="from"
                required
                onChange={changeHandler}
                id="from"
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option value="newYork">New York</option>
                <option value="london">London</option>
                <option value="iran">Iran</option>
                <option value="rome">Rome</option>
              </select>
            </div>
          </div>

          {/* Destination To */}
          <div className="py-1.5 px-2.5 flex-1 border-r border-gray-200">
            <p>Destination To</p>
            <div className="flex flex-row">
              <select
                name="To"
                id="To"
                onChange={changeHandler}
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option value="newYork">New York</option>
                <option value="london">London</option>
                <option value="iran">Iran</option>
                <option value="rome">Rome</option>
              </select>
            </div>
          </div>

          {/* date */}
          <div className="py-1.5 px-2.5 flex-1 border-r border-gray-200">
            <p>Journey Date</p>
            <div className="flex flex-row">
              <input
                type="date"
                name="date"
                onChange={changeHandler}
                required
                className="outline-none p-2 w-full"
                id=""
              />
            </div>
          </div>

          {/* Guest option */}
          <div className="py-1.5 px-2.5 flex-1 border-r border-gray-200">
            <p>Guest</p>
            <div className="flex flex-row">
              <select
                name="guest"
                onChange={changeHandler}
                id="guest"
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option value="1Person">1 person</option>
                <option value="2Person">2 person</option>
                <option value="3Person">3 person</option>
                <option value="4Person">4 person</option>
              </select>
            </div>
          </div>

          {/* Travel Class */}
          <div className="py-1.5 px-2.5 flex-1 border-r border-gray-200">
            <p>Travel Class</p>
            <div className="flex flex-row">
              <select
                onChange={changeHandler}
                name="travelClass"
                id="travelClass"
                className="outline-none p-2 w-full "
              >
                <option value="">Please Select</option>
                <option value="business">Business</option>
                <option value="economy">Economy</option>
              </select>
            </div>
          </div>
          {/* button */}
          <button
            onClick={(e) => BookHandler(e)}
            type="submit"
            className="bg-indigo-500 text-white px-8 py-1 space-x-2 text-center flex items-center justify-center"
          >
            <FaPlus className="mr-1" />
            Book Now
          </button>
        </form>
      </div>
      <div className="mt-6 max-w-6xl mx-auto">
        {Booking.map((item) => (
          <div
            key={item.id}
            className="p-2 border rounded mb-2 flex justify-between"
          >
            <span>
              {item.from} → {item.to}
            </span>
            <span>{item.date}</span>
            <span>{item.guest}</span>
            <span>{item.travelClass}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
