import React, { useState } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import "./Pacakges.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
//import { Packgtypes } from "./Packgtypes";
import useFetch from "../../hooks/useFetch";
import SearchItem from "../../Components/SearchItem/SearchItem";

export const Pacakges = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const [searchParams, setSearchParams] = useSearchParams();
  const dest = searchParams.get("destination")
  let search = ""
  for (const entry of searchParams.entries()) {
    search += entry[0] + "=" + entry[1] + "&"
  }
  console.log(search);

  const navigate = useNavigate();
  
  const { data, loading, error, reFetch } = useFetch(
    `/packages?destination=${destination}&min=${min || 0}&max=${max || 5000}`
  );
  
  const handleSearch = () => {
    // reFetch();
    let x = `destination=${destination}&`
    navigate(`/packages?${search}`, { state: {  } });
  };

  return (
    <div>
      <div className="pictures">
        {/* <h1 >Packages</h1> */}
      </div>
      <div className="background">
        <div className="backheading">

        </div>
        <div className="container">

          <div className="row">
            <div className="col-md-3 col-sm-12 pt-2 ">
              <div className="listContainer">
                <div className="  listWrapper">
                  <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                      <label>Destination</label>
                      <input placeholder={destination} type="text" />
                    </div>
                    <div className="lsItem">
                      <label>Check-in Date</label>
                      <span onClick={() => setOpenDate(!openDate)}>{`${format(
                        date[0].startDate,
                        "MM/dd/yyyy"
                      )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                      {openDate && (
                        <DateRange
                          onChange={(item) => setDate([item.selection])}
                          minDate={new Date()}
                          ranges={date}
                        />
                      )}
                    </div>
                    <div className="lsItem">
                      <label>Options</label>
                      <div className="lsOptions">
                        <div className="lsOptionItem">
                          <span className="lsOptionText">
                            Min price <small>per night</small>
                          </span>
                          <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                          <span className="lsOptionText">
                            Max price <small>per night</small>
                          </span>
                          <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                          <span className="lsOptionText">Adult</span>
                          <input
                            type="number"
                            min={1}
                            className="lsOptionInput"
                            placeholder={options.adult}
                          />
                        </div>
                        <div className="lsOptionItem">
                          <span className="lsOptionText">Children</span>
                          <input
                            type="number"
                            min={0}
                            className="lsOptionInput"
                            placeholder={options.children}
                          />
                        </div>
                        <div className="lsOptionItem">
                          <span className="lsOptionText">Room</span>
                          <input
                            type="number"
                            min={1}
                            className="lsOptionInput"
                            placeholder={options.room}
                          />
                        </div>
                      </div>
                    </div>
                    <button onClick={handleSearch}>Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 ">
              {/* <SearchItem /> */}
              < SearchItem destination={destination} />
              {/* <div>
            {loading ? (
              "Loading, Please Wait"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem destination={destination} item={item} key={item._id} />
                ))}
              </>
            )}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pacakges;