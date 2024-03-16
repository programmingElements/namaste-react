import MenuContainer from "./MenuContainer";
import TopRestaurants from "./TopRestaurants";
import RestaurantsWithFoodDelivery from "./RestaurantsWithFoodDelivery";
import BestPlacesToEatAcrossCities from "./BestPlacesToEatAcrossCities";
import BestCuisinesNearMe from "./BestCuisinesNearMe";

const Body = () => {
    return <div className="body-container">
        <MenuContainer />
        <TopRestaurants />
        <RestaurantsWithFoodDelivery />
        <BestPlacesToEatAcrossCities />
        <BestCuisinesNearMe />
    </div>
}

export default Body;