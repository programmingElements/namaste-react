import { CDN_IMAGE } from "../utils/constants";

const RestaurantCard = ({restaurant, width}) => {
    const {name,cuisines,avgRatingString,sla,areaName,cloudinaryImageId} = restaurant.info;
    return <div className={`res-card flex-1 ${width}`}>
        <div className="res-logo">
        <img 
         className="w-full object-fill h-[200px]  rounded-xl"
         src={`${CDN_IMAGE}/${cloudinaryImageId}`} 
         alt="" 
        />
        </div>
        <div className="res-des pl-2">
            <h1 className="text-lg font-medium">{name}</h1>
            <h2 className=" text-base font-medium">🔯 {avgRatingString} &middot; {sla.slaString}</h2>
            <h3 className=" text-base font-light">{cuisines.join(", ")}</h3>
            <h3 className=" text-base font-light">{areaName}</h3>
        </div>
    </div>
}

export default RestaurantCard;