import { RESTRO_IMG } from "../utils/constants";
const RestroCard=({resData})=>{
    return(
        <div className="restau-container">
            {/* <div className="search-box">
                <h1>Search</h1>
            </div> */}
            <div className="restau-card">
                <img className="restau-img" src={RESTRO_IMG+resData.info.cloudinaryImageId}/>
                <p style={{fontSize:"18px",fontWeight:"bold"}}>{resData.info.name}</p>
                <p style={{fontSize:"16px",fontWeight:"bold"}}>{resData.info.cuisines.join(' ,')}</p>
                <p style={{fontSize:"16px",fontWeight:"bold"}}>{resData.info.avgRating} stars</p>
                <p style={{fontSize:"16px",fontWeight:"bold"}}>{resData.info.description}</p>
                <p style={{fontSize:"16px",fontWeight:"bold"}}>{resData.info.costForTwo}</p>

                <p style={{fontSize:"16px",fontWeight:"bold"}}>{resData.info.sla.slaString}</p>



               
            </div>
            </div>
    )

}
export default RestroCard;