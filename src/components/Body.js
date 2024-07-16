import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listofRes, setListofRes] = useState([])
    const [filteredRestro, setFilteredRestro] = useState([])
    const [searchRes, setSearchRes] = useState();
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9310903&lng=80.15262709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        console.log("format type", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if (listofRes.length === 0) {
        return (
            <Shimmer />

        )
    }


    const TopRatedfunc = () => {
        const TopRatedfilter = listofRes.filter((resData) => resData.info.avgRating > 4.5)
        console.log("avgRating",TopRatedfilter)
        setFilteredRestro(TopRatedfilter)
    }
    const handleChange = (e) => {
        setSearchRes(e.target.value)
        console.log("search", e.target.value)
    }
    const filterSearch = () => {
        const filter = listofRes.filter(item => item.info.name.toLowerCase().includes(searchRes.toLowerCase()))
        setFilteredRestro(filter)

    }
    return (
        <div className="body-container">
            <div className="filters" style={{display:"flex"}}>
                <div className="search">
                    <input
                        type="text"
                        value={searchRes}
                        onChange={handleChange}
                    />
                    <button onClick={filterSearch}>Search</button>
                </div>
                <div style={{marginLeft:"10px"}}>
                <button className="toprated-btn" onClick={TopRatedfunc}>TopRated Restro</button>

                </div>



            </div>



            <div className="res-container">
                {filteredRestro.map((item) => (
                    <RestroCard key={item.info.id} resData={item} />
                ))}
            </div>
        </div>


    )
}
export default Body;