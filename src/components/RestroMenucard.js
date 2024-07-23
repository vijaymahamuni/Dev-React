import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { MENUCARD_IMG } from "../utils/constants";
const RestroMenucard = () => {
    const [restroMenures, setRestroMenures] = useState(null)


    useEffect(() => {
        restromenu();
    }, [])

    const { resId } = useParams();

    const restromenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log("menuData", json)
        setRestroMenures(json.data)
    }
    const name = restroMenures?.cards[2]?.card?.card?.info.name;
    const avgRating = restroMenures?.cards[2]?.card?.card?.info.avgRating;
    const totalRatingsString = restroMenures?.cards[2]?.card?.card?.info.totalRatingsString;
    const areaName = restroMenures?.cards[2]?.card?.card?.info.areaName;
    const expectationNotifiers = restroMenures?.cards[2]?.card?.card?.info.expectationNotifiers[0].text;
    const cuisines = restroMenures?.cards[2]?.card?.card?.info.cuisines;
    const costForTwoMessage = restroMenures?.cards[2]?.card?.card?.info.costForTwoMessage;
    const itemCards = restroMenures?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    console.log("itemCards", itemCards)
    if (restroMenures === null) {
        return (
            <Shimmer />
        )
    }

    return (
        <div className="restromenu">
            <h1>{name}</h1>
            <div className="header-menu">
                <h5>{avgRating}({totalRatingsString}) -{costForTwoMessage}</h5>
                <p>{cuisines.join(', ')} </p>
                <p>{areaName}</p>
                <p>{expectationNotifiers}</p>

            </div>
            <h2>Menu</h2>
            {itemCards && itemCards.length > 0 ? (
                <ul>
                    {itemCards.map(item =>
                        <li key={item.card.info.id} className="listMenu" >
                            <h3>{item.card.info.name}</h3>
                            <p style={{fontWeight:'bold'}}>
                            Rs.{item.card.info.price /100}
                            </p>
                            <p style={{color:"green",fontWeight:"bold"}}>
                                {item.card.info.ratings.aggregatedRating.rating}({item.card.info.ratings.aggregatedRating.ratingCountV2})
                            </p>
                            <p style={{color:"gray"}}>
                                {item.card.info.description}
                            </p>
                            <div className="menucard-imgdiv">
                            <img src={MENUCARD_IMG + item.card.info.imageId} className="menucard-img"/>

                            </div>


                        </li>
                    )}
                </ul>

            ) : (
                <p>No Menu cards here</p>
            )}

        </div>

    )
}
export default RestroMenucard;