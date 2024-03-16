import RestaurantCard from "./RestaurantCard";
import { resDeliveryObj, resDeliveryTitle } from "../utils/mocData";
import TitleLayout from "./TitleLayout";

const RestaurantsWithFoodDelivery = () => {
    const {restaurants} = resDeliveryObj?.card?.card?.gridElements?.infoWithStyle;
    return (<div className="res-delivery container mx-auto px-32 pt-[24px]">
        <TitleLayout title={resDeliveryTitle?.card?.card?.title} />
        <div className="grid grid-cols-4 gap-4 pt-2 pb-12">
            {
                restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} width={"min-w-60"} />
                ))
            }
        </div>
        <hr className=" font-semibold" />
    </div>)
}

export default RestaurantsWithFoodDelivery;