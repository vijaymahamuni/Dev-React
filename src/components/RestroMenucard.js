import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import { MENUCARD_IMG } from "../utils/constants";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from './RestaurantCategory';

const RestroMenucard = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantsMenu(resId);

    const name = resInfo?.cards[2]?.card?.card?.info.name;
    const cuisines = resInfo?.cards[2]?.card?.card?.info.cuisines;
    const costForTwoMessage = resInfo?.cards[2]?.card?.card?.info.costForTwoMessage;
    // const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    const Categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
        c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("category",Categories)

    if (resInfo === null) {
        return (
            <Shimmer />
        )
    }

    return (
        <div className="text-center m-4">
            <h1 className='font-bold text-xl'>{name}</h1>
            <div className="mt-4 font-bold">
                <h5>{cuisines.join(', ')}  -{costForTwoMessage}</h5>
       

            </div>
            <div>
                {Categories.map((item)=>
                (
                    <RestaurantCategory />

                )
                
                )}
            </div>
           
        </div>

    )
}
export default RestroMenucard;