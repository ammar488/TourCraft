import { Link } from "react-router-dom";
import List from "../../pages/Lists/Lists";
import "./searchItem.css";
import useFetch from "../../hooks/useFetch";

// const { data, loading, error, reFetch } = useFetch(
//   `/hotels?city=${destination}`
// );

export const SearchItem = ({ destination }) => {
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}`
  );

  const hotels = data.map((item) => {
    return <div>
      {/* <img
    src={item?.photos[0]}
    alt=""
    className="siImg"        
  /> */}
  <div className="siDesc">
    <h1 className="siTitle">{item?.name}</h1>
    <span className="siDistance">{item?.distance} from center</span>
    <span className="siTaxiOp">Free airport taxi</span>
    <span className="siSubtitle">{item?.desc}</span>
    <span className="siFeatures">
      Entire studio • 1 bathroom • 21m² 1 full bed
    </span>
    <span className="siCancelOp">Free cancellation </span>
    <span className="siCancelOpSubtitle">
      You can cancel later, so lock in this great price today!
    </span>
  </div>
  <div className="siDetails">
      <span>Excellent</span>
      <button>{item?.rating}</button>
    {item?.rating && <div className="siRating">
    </div>}
    <div className="siDetailTexts">
      <span className="siPrice">{item?.cheapestPrice}</span>
      <span className="siTaxOp">Includes taxes and fees</span>
      <Link to={`/hotels/${item?._id}`}></Link>
      <button className="siCheckButton">See availability</button>
    </div>
  </div>
    </div>
  })

  console.log(hotels)

  return (

    hotels
      // <p>{hotels}</p>

  );
};

export default SearchItem;