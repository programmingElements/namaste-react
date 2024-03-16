import {LOGO_IMAGE} from "../utils/constants";

const Header = () => {
    return <nav className="shadow-md">
        <div className="container mx-auto flex justify-between items-center px-2">
            <div className="logo-img w-2/5">
                <img className=" h-[80px] w-[80px] md:w-[120px] lg:w-[180px]" src={LOGO_IMAGE} alt="Logo Image" />
            </div>
            <div className="nav-items w-3/5">
                <ul className="flex gap-20 justify-end pr-[80px] text-sm font-medium">
                    <li>Search</li>
                    <li>About Us</li>
                    <li>Offers</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    </nav>
}


export default Header;