import { RESTRO_IMG } from "../utils/constants";
const RestroCard=({resData})=>{
    console.log("resData",resData)
    return(
        <div className="restau-container">
            {/* <div className="search-box">
                <h1>Search</h1>
            </div> */}
            <div className="restau-card">
                <img className="restau-img" src={RESTRO_IMG+resData.info.cloudinaryImageId}/>
                <p style={{fontSize:"18px",fontWeight:"bold"}}>{resData.info.name}</p>
                <p style={{fontSize:"16px",fontWeight:"bold"}}>{resData.info.avgRating}</p>
                <p style={{fontSize:"16px",fontWeight:"bold"}}>{resData.info.sla.slaString}</p>
                <p style={{fontSize:"16px"}}>{resData.info.cuisines.join(' ,')}</p>
                <p style={{fontSize:"16px"}}>{resData.info.locality}</p>

               
            </div>
            </div>
    )

}
export default RestroCard;