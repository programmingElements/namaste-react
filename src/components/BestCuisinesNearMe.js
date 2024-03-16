import { resBestCities } from "../utils/mocData";
import TitleLayout from "./TitleLayout";

const BestCuisinesNearMe = () => {
    const {brands} = resBestCities?.card?.card
    return (<div className="res-cuisines container mx-auto px-32 pt-[24px]">
        <TitleLayout title={resBestCities?.card?.card?.title} />
        <div className="grid grid-cols-4 gap-4 pt-2 pb-12">
        {
            brands.map((brand) => {
                return (<div key={brand.text} className=" border-2 rounded-lg p-3">
                    <h1 className="text-lg text-gray-700 text-center">{brand.text}</h1>
                </div>)
            })
        }
    </div>
    </div>)
}


export default BestCuisinesNearMe;