import { useState, useEffect } from "react";
import Table from "./Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dateChange, setDateChange] = useState(false);

  const [data, setData] = useState({
    football_ground: {
      status: "open",
      date: null,
    },
    tp_ganeshan: {
      status: "open",
      date: null,
    },
    valliammal_basket_ball: {
      status: "booked",
      date: "2023-04-27",
    },
    valliammal_tennis: {
      status: "booked",
      date: "2023-04-30",
    },
    valliammal_volley_ball: {
      status: "open",
      date: null,
    },
    shuttel_court: {
      status: "open",
      date: null,
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="my-10">
      <h1 className="lg:text-4xl mr-20 mb-3 text-2xl font-bold text-center">
        Slot Booking
      </h1>
      {loading ? (
        <h1 className="text-center mt-10 text-3xl font-medium">Loading...</h1>
      ) : (
        <>
          <div>
            <span className="border w-full p-2 grid place-content-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setDateChange(true);
                  setStartDate(date);
                }}
              />
            </span>
          </div>
          <div className="">
            {dateChange && <Table data={data} date={startDate} />}
          </div>
        </>
      )}
    </div>
  );
};
