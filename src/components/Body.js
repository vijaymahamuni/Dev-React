import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listofRes, setListofRes] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        console.log("format type", json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListofRes(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(listofRes.length===0){
        return(
            <Shimmer />

        )
    }


    const TopRatedfunc = () => {
        const TopRatedfilter = listofRes.filter((resData) => resData.info.avgRating > 4)
        setListofRes(TopRatedfilter)
    }
    return (
        <div className="body-container">
            <button className="toprated-btn" onClick={TopRatedfunc}>TopRated Restro</button>
            <div className="res-container">
                {listofRes.map((item) => (
                    <RestroCard key={item.info.id}resData={item} />
                ))}
            </div>
        </div>


    )
}
export default Body;