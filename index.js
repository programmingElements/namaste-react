import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/item",
        element: <div>Food Order Details Found</div>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);




































// import {resMenuObj,resTopObj, resDeliveryTitle, resDeliveryObj} from "./src/utils/constants";


// const Header = () => {
//     return <nav className="shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-2">
//             <div className="logo-img w-2/5">
//                 <img className=" h-[80px] w-[80px] md:w-[120px] lg:w-[180px]" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2" alt="Logo Image" />
//             </div>
//             <div className="nav-items w-3/5">
//                 <ul className="flex gap-20 justify-end pr-[80px] text-sm font-medium">
//                     <li>Search</li>
//                     <li>About Us</li>
//                     <li>Offers</li>
//                     <li>Sign In</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// }

// const MenuItem = (props) => {
//     return <img className=" w-full h-40" src={props.imgUrl} alt="" />
// }

// const MenuContainer = () => {
//     const {info} = resMenuObj?.card?.card?.imageGridCards;
    
//     return <div className="menu-container container mx-auto px-32 pt-[8px]">
//         <div className="menu-title flex items-center justify-between">
//         <h1 className="text-2xl font-semibold py-1">
//             {resMenuObj?.card?.card?.header?.title}
//         </h1>
//         {/* <div className="">
//             <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>&#8592;</button>
//             &nbsp;
//             <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>&#8594;</button>
//         </div> */}
//         </div>
//         {/* <div className="flex pt-2 pb-10 overflow-x-clip">
//             {
//                 info.map((menu) => (
//                     <MenuItem key={menu.id} imgUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${menu.imageId}`} />
//                 ))
//             }
//         </div> */}

//         <div className="flex flex-nowrap pt-2 pb-10 overflow-x-scroll no-scrollbar">
//             {
//                 info.map((menu) => (
//                     <MenuItem key={menu.id} imgUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${menu.imageId}`} />
//                 ))
//             }
//         </div>

//         <hr className="font-semibold" />

//     </div>
// }

// const RestaurantCard = ({restaurant, width}) => {
//     const {name,cuisines,avgRatingString,sla,areaName,cloudinaryImageId} = restaurant.info;
//     return <div className={`res-card flex-1 ${width}`}>
//         <div className="res-logo">
//         <img 
//          className="w-full object-fill h-[200px]  rounded-xl"
//          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
//          alt="" 
//         />
//         </div>
//         <div className="res-des pl-2">
//             <h1 className="text-lg font-medium">{name}</h1>
//             <h2 className=" text-base font-medium">🔯 {avgRatingString} &middot; {sla.slaString}</h2>
//             <h3 className=" text-base font-light">{cuisines.join(", ")}</h3>
//             <h3 className=" text-base font-light">{areaName}</h3>
//         </div>
//     </div>
// }


// const TopRestaurants = () => {
//     const {restaurants} = resTopObj?.card?.card?.gridElements?.infoWithStyle;
//     return (<div className="top-res container mx-auto px-32 pt-[24px] ">
//         <div className="menu-title flex items-center justify-between">
//         <h1 className="res-pogo text-2xl font-semibold py-2">
//             {
//                 resTopObj?.card?.card?.header?.title
//             }    
//         </h1>
//         <div className="">
//             <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>
//             &#8592;
//             </button>
//             &nbsp;
//             <button className=" text-2xl shadow p-1 text-center" style={{borderRadius: "50%"}}>
//                 &#8594;
//             </button>
//         </div>
//         </div>
//         <div className="flex gap-4 pt-2 pb-12 overflow-x-clip">
//             {
//                 restaurants.map((restaurant) => (
//                     <RestaurantCard key={restaurant.info.id} restaurant={restaurant} width={"min-w-64"} />
//                 ))
//             }
//         </div>
//         <hr className="font-semibold" />
//     </div>)
// }

// const RestaurantsWithFoodDelivery = () => {
//     const {restaurants} = resDeliveryObj?.card?.card?.gridElements?.infoWithStyle;
//     return (<div className="top-res container mx-auto px-32 pt-[24px] pb-8">
//         <h1 className="res-pogo text-2xl font-semibold py-1">
//             {resDeliveryTitle?.card?.card?.title}
//         </h1>
//         <div className="grid grid-cols-4 gap-4 py-2">
//             {
//                 restaurants.map((restaurant) => (
//                     <RestaurantCard key={restaurant.info.id} restaurant={restaurant} width={"min-w-60"} />
//                 ))
//             }
//         </div>
//     </div>)
// }

// const Body = () => {
//     return <div className="body-container">
//         <MenuContainer />
//         <TopRestaurants/>
//         <RestaurantsWithFoodDelivery/>
//     </div>
// }

// const Footer = () => {
//     return <div className="p-2 bg-slate-500">
//         <div className="container mx-auto max-w-6xl">
//         <div className="flex justify-evenly items-center">
//             <div className=" text-pink-600 font-semibold">
//                 OrderOnlineFood.in
//             </div>
//             <div className="text-center text-white">
//                 <ul className="flex gap-5 justify-between items-center">
//                     <li>
//                         Privacy Policy
//                     </li>
//                     <li>
//                         Terms Of Service
//                     </li>
//                     <li>           
//                         Refund Policy
//                     </li>
//                     <li>
//                         Gift a Course
//                     </li>
//                     <li>
//                         Team
//                     </li>
//                     <li>
//                         Contact Us
//                     </li>
//                 </ul>
//             </div>
//         </div>
//         <div className="text-center pt-1">
//         <h2 className="text-base">Make with 💗 in India</h2>
//         </div>
//         </div>
//     </div>
// }

// const AppLayout = () => {
//     return <div className="app">
//         <Header />
//         <Body />
//         <Footer/>
//     </div>
// }
