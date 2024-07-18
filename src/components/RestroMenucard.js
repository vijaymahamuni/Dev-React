import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestroMenucard = () => {
    const [restroMenures, setRestroMenures] = useState(null)


    useEffect(() => {
        restromenu();
    }, [])

    const { resId } = useParams();

    const restromenu = async () => {
        const data = await fetch( MENU_API+ resId);
        const json = await data.json();
        console.log("menuData", json)
        setRestroMenures(json.data)
    }
    const name = restroMenures?.cards[2]?.card?.card?.info.name;
    const cuisines = restroMenures?.cards[2]?.card?.card?.info.cuisines;
    const costForTwoMessage = restroMenures?.cards[2]?.card?.card?.info.costForTwoMessage;
    const itemCards= restroMenures?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    if (restroMenures === null) {
        return (
            <Shimmer />
        )
    }

    return (
        <div className="restromenu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage} </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => 
                    <li key={item.card.info.id}>
                        {item.card.info.name}
                    </li>
                )}
            </ul>



        </div>
    )
}
export default RestroMenucard;