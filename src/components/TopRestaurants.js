import RestaurantCard from "./RestaurantCard";
import { resTopObj } from "../utils/mocData";
import TitleLayout from "./TitleLayout";

const TopRestaurants = () => {
    const {restaurants} = resTopObj?.card?.card?.gridElements?.infoWithStyle;
    return (<div className="top-res container mx-auto px-32 pt-[24px] ">
        <div className="menu-title flex items-center justify-between">
        <TitleLayout title={resTopObj?.card?.card?.header?.title} />
        <div className="">
            <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>
            &#8592;
            </button>
            &nbsp;
            <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>
                &#8594;
            </button>
        </div>
        </div>
        <div className="flex gap-4 pt-2 pb-12 overflow-x-clip">
            {
                restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} width={"min-w-64"} />
                ))
            }
        </div>
        <hr className="font-semibold" />
    </div>)
}


export default TopRestaurants;