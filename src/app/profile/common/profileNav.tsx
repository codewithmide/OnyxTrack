'use client';

import Logo from "@/app/components/common/logo";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, {useState} from "react";

const ProfileNavbar: React.FC = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleOpen = () => {
        setDropdown(!dropdown);
    }

    const handleClose = () => {
        setDropdown(false);
    }

    return (
        <nav className="between w-full py-4">
            <div>
                <Logo />
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
                    <div className="center w-full">
                        <ConnectButton chainStatus="icon" showBalance={false} />
                    </div>
                </div>
            )}
        </nav>
    );
}
 
export default ProfileNavbar;