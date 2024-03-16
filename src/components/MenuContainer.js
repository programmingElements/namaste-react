import MenuItem from "./MenuItem";
import { resMenuObj } from "../utils/mocData";
import { MENU_IMAGE } from "../utils/constants";
import TitleLayout from "./TitleLayout";

const MenuContainer = () => {
    const {info} = resMenuObj?.card?.card?.imageGridCards;
    
    return <div className="menu-container container mx-auto px-32 pt-[8px]">
        <div className="menu-title flex items-center justify-between">
        <TitleLayout title={resMenuObj?.card?.card?.header?.title} />
        {/* <div className="">
            <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>&#8592;</button>
            &nbsp;
            <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>&#8594;</button>
        </div> */}
        </div>
        {/* <div className="flex pt-2 pb-10 overflow-x-clip">
            {
                info.map((menu) => (
                    <MenuItem key={menu.id} imgUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${menu.imageId}`} />
                ))
            }
        </div> */}

        <div className="flex flex-nowrap pt-2 pb-10 overflow-x-scroll no-scrollbar">
            {
                info.map((menu) => (
                    <MenuItem key={menu.id} imgUrl={`${MENU_IMAGE}/${menu.imageId}`} />
                ))
            }
        </div>

        <hr className="font-semibold" />

    </div>
}

export default MenuContainer;