const Footer = () => {
    return <div className="p-2 bg-slate-500">
        <div className="container mx-auto max-w-6xl">
        <div className="flex justify-evenly items-center">
            <div className=" text-pink-600 font-semibold">
                OrderOnlineFood.in
            </div>
            <div className="text-center text-white">
                <ul className="flex gap-5 justify-between items-center">
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Terms Of Service
                    </li>
                    <li>           
                        Refund Policy
                    </li>
                    <li>
                        Gift a Course
                    </li>
                    <li>
                        Team
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>
        </div>
        <div className="text-center pt-1">
        <h2 className="text-base">Make with 💗 in India</h2>
        </div>
        </div>
    </div>
}

export default Footer;