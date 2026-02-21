import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { DELETE } from "../feature/bookSlice";

function Table() {
  const Booking = useSelector((store) => store.Booking.Booking);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(DELETE(id));
  };

  return (
    <>
      {Booking.length > 0 && (
        <div className=" bg-white rounded-md max-w-6xl w-full mx-auto shadow-md p-4 mt-8 ">
          <table className="min-w-full text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Destination From</th>
                <th className="border p-2">Destination To</th>
                <th className="border p-2">Journey Date</th>
                <th className="border p-2">Guest</th>
                <th className="border p-2">Travel Class</th>
                <th className="border p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Booking.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border p-2 capitalize">{item.from}</td>
                  <td className="border p-2 capitalize">{item.to}</td>
                  <td className="border p-2">{item.date}</td>
                  <td className="border p-2">{item.guest}</td>
                  <td className="border p-2">{item.travelClass}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteHandler(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded flex items-center justify-center "
                    >
                      <RiDeleteBin6Fill size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Table;
