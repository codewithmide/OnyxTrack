'use client';

import Logo from "./common/logo";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, {useState} from "react";

const Navbar: React.FC = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleOpen = () => {
        setDropdown(!dropdown);
    }

    const handleClose = () => {
        setDropdown(false);
    }

    return (
        <nav className="between w-11/12 py-4">
            <div>
                <Logo />
            </div>
            <div className="center md:flex sm:hidden">
                <ul className="center gap-5 capitalize font-medium">
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="#">Features</Link>
                    </li>
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="#">Resources</Link>
                    </li>
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="#">Pricing</Link>
                    </li>
                    <li className="hover:scale-95 transition-all duration-300">
                        <Link href="#">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="md:flex sm:hidden">
                <ConnectButton chainStatus="icon" showBalance={false} />
            </div>
            <div className="md:hidden grid place-items-center">
                <div className="center" onClick={handleOpen}>
                    <img src="/icons/menu.png" alt="menu" />
                </div>
            </div>
            {dropdown && (
                <div className="absolute w-screen flex flex-col h-[70vh] top-0 left-0 right-0 bg-blue text-white">
                    <div className="ended w-[95%] py-4">
                        <div className="center" onClick={handleClose}>
                            <img src="/icons/close.png" alt="close" />
                        </div>
                    </div>
                    <div className="center my-10">
                        <ul className="center flex-col gap-5 capitalize font-medium">
                            <li className="hover:scale-95 transition-all duration-300">
                                <Link href="#">Features</Link>
                            </li>
                            <li className="hover:scale-95 transition-all duration-300">
                                <Link href="#">Resources</Link>
                            </li>
                            <li className="hover:scale-95 transition-all duration-300">
                                <Link href="#">Pricing</Link>
                            </li>
                            <li className="hover:scale-95 transition-all duration-300">
                                <Link href="#">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="center w-full">
                        <ConnectButton chainStatus="icon" showBalance={false} />
                    </div>
                </div>
            )}
        </nav>
    );
}
 
export default Navbar;