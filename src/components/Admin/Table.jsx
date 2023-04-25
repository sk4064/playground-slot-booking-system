import React, { useState, useEffect } from "react";

const Table = ({ data, date }) => {
  const schema = {
    football_ground: "Football Ground",
    tp_ganeshan: "T.P. Ganeshan",
    valliammal_basket_ball: "Valliammal Basket Ball",
    valliammal_tennis: "Valliammal Tennis",
    valliammal_volley_ball: "Valliammal Volley Ball",
    shuttel_court: "Shuttle Court",
  };

  const status = ["open", "booked", "open", "open", "booked"];

  const [currentStatus, setCurrentStatus] = useState({
    football_ground: status[Math.floor(Math.random() * status.length)],
    tp_ganeshan: status[Math.floor(Math.random() * status.length)],
    valliammal_basket_ball: status[Math.floor(Math.random() * status.length)],
    valliammal_tennis: status[Math.floor(Math.random() * status.length)],
    valliammal_volley_ball: status[Math.floor(Math.random() * status.length)],
    shuttel_court: status[Math.floor(Math.random() * status.length)],
  });

  useEffect(() => {
    setCurrentStatus({
      football_ground: status[Math.floor(Math.random() * status.length)],
      tp_ganeshan: status[Math.floor(Math.random() * status.length)],
      valliammal_basket_ball: status[Math.floor(Math.random() * status.length)],
      valliammal_tennis: status[Math.floor(Math.random() * status.length)],
      valliammal_volley_ball: status[Math.floor(Math.random() * status.length)],
      shuttel_court: status[Math.floor(Math.random() * status.length)],
    });
  }, [date]);

  const onBook = (item) => {
    let temp = {
      ...currentStatus,
    };
    temp[item] = "booked";
    setCurrentStatus(temp);
  };

  const onCancel = (item) => {
    let temp = {
      ...currentStatus,
    };
    temp[item] = "open";
    setCurrentStatus(temp);
  };

  return (
    <div className="lg:m-10 m-5">
      <div>
        <div class="my-5 overflow-x-auto rounded-lg border border-gray-200">
          <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
            <thead class="text-center">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Ground
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {Object.keys(data).map((item) => (
                <>
                  <tr className="text-center">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {schema[item]}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      {data[item].status === currentStatus[item] ? (
                        <a
                          onClick={() => onBook(item)}
                          class="cursor-pointer inline-block rounded border border-[#77DD77] bg-[#77DD77] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#77DD77] focus:outline-none focus:ring active:text-indigo-500"
                        >
                          Book Now
                        </a>
                      ) : (
                        <>
                          <a class="inline-block rounded border border-[#ff6961] bg-[#ff6961] px-12 py-3 text-sm font-medium text-white focus:outline-none">
                            Booked
                          </a>
                          <a
                            onClick={() => onCancel(item)}
                            class="cursor-pointer ml-5 inline-block rounded border border-[#ff6961] bg-none px-12 py-3 text-sm font-medium text-[#ff6961] focus:outline-none"
                          >
                            Cancel
                          </a>
                        </>
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
