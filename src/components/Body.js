import RestroCard from "./RestroCard";
import { MOCKDATA } from "../utils/mockdata";
import { useState } from "react";


const Body = () => {
    const [listofRes, setListofRes] = useState(MOCKDATA)
    const TopRatedfunc = () => {
        const TopRatedfilter = listofRes.filter((resData) => resData.info.avgRating > 4)
        setListofRes(TopRatedfilter)
    }
    return (
        <div className="body-container">
            <button className="toprated-btn" onClick={TopRatedfunc}>TopRated Restro</button>
            <div className="res-container">

                {listofRes.map((item) => (
                    <RestroCard key={item.id} resData={item} />

                ))}

            </div>
        </div>

    )
}
export default Body;