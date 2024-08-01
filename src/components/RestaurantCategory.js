import { useState } from "react"
import ItemCards from "./ItemCard"

const RestaurantCategory = ({ item }) => {
    // console.log("item category", item)
    const [displayItems, setDisplayItems] = useState(false);
    const handleClick = () => {
        setDisplayItems(!displayItems)
    }
    return <div className="w-6/12 mx-auto m-4 p-4 bg-gray-50 font-bold shadow-lg">
        <div>
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <p>{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</p>
                <span >▼</span>
            </div>
            {displayItems && <ItemCards itemcard={item?.card?.card?.itemCards} />
            }
        </div>


    </div>
}
export default RestaurantCategory;