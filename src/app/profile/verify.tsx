/* eslint-disable @next/next/no-img-element */
"use client"

import { useAccount, useBalance } from "wagmi";
import CustomButton from "../components/common/button";
import { useState } from 'react';
import { toast } from "react-hot-toast";
import { IProductInfo, useProductContext } from "../context/productContext";

const Verify:React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const { address } = useAccount()
    const { data } = useBalance({
        address: address,
    })
    const [product, setProduct] = useState<IProductInfo>();

    const { verifyVC, products } = useProductContext();

    const handleVerify = async () => {
        if (!inputValue) {
            toast.error('Please enter a JWT token');
            return;
        }

        try {
            const isValid = await verifyVC(inputValue);
            const _product = products.find((p) => p.vc == inputValue);
            setProduct(_product);

            if (isValid) {
                toast.success('Product is verified');
            } else {
                toast.error('Product is not verified');
            }
        } catch (error) {
            toast.error('Invalid JWT token');
        }

        setInputValue('');
    };

    return (
        <div>
        <div className='flex flex-col gap-16 p-8'>
            {address ? (
                <div className='flex flex-col'>
                    <div>
                        <h1 className='font-bold text-md'>
                            Verify Products
                        </h1>
                        <p className='text-sm'>
                            Confirm the authenticity of the product by verifying it
                        </p>
                    </div>
                    <div className='h-[160px] gap-2 mt-10 border rounded-[12px] border-[#0000001A] bg-white p-6 flex flex-col'>
                        <p className="font-semibold">
                            Enter verifiable credential
                        </p>
                        <div className="bg-[#F8F9FB] w-full between p-3 rounded-[18px]">
                            <div className="flex gap-4 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M2.66699 12.9998C2.12033 12.9998 1.66699 12.5465 1.66699 11.9998V8.6665C1.66699 4.81317 4.81366 1.6665 8.66699 1.6665H12.0003C12.547 1.6665 13.0003 2.11984 13.0003 2.6665C13.0003 3.21317 12.547 3.6665 12.0003 3.6665H8.66699C5.90699 3.6665 3.66699 5.9065 3.66699 8.6665V11.9998C3.66699 12.5465 3.21366 12.9998 2.66699 12.9998Z" fill="#B3B0B0"/>
                                <path d="M29.3333 12.9998C28.7867 12.9998 28.3333 12.5465 28.3333 11.9998V8.6665C28.3333 5.9065 26.0933 3.6665 23.3333 3.6665H20C19.4533 3.6665 19 3.21317 19 2.6665C19 2.11984 19.4533 1.6665 20 1.6665H23.3333C27.1867 1.6665 30.3333 4.81317 30.3333 8.6665V11.9998C30.3333 12.5465 29.88 12.9998 29.3333 12.9998Z" fill="#B3B0B0"/>
                                <path d="M23.333 30.3335H21.333C20.7863 30.3335 20.333 29.8802 20.333 29.3335C20.333 28.7868 20.7863 28.3335 21.333 28.3335H23.333C26.093 28.3335 28.333 26.0935 28.333 23.3335V21.3335C28.333 20.7868 28.7863 20.3335 29.333 20.3335C29.8797 20.3335 30.333 20.7868 30.333 21.3335V23.3335C30.333 27.1868 27.1863 30.3335 23.333 30.3335Z" fill="#B3B0B0"/>
                                <path d="M12.0003 30.3333H8.66699C4.81366 30.3333 1.66699 27.1867 1.66699 23.3333V20C1.66699 19.4533 2.12033 19 2.66699 19C3.21366 19 3.66699 19.4533 3.66699 20V23.3333C3.66699 26.0933 5.90699 28.3333 8.66699 28.3333H12.0003C12.547 28.3333 13.0003 28.7867 13.0003 29.3333C13.0003 29.88 12.547 30.3333 12.0003 30.3333Z" fill="#B3B0B0"/>
                                </svg>
                                <input 
                                    type="text"
                                    className="outline-none bg-[#F8F9FB] w-full" placeholder='Enter your Product DID '
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}/>
                            </div>
                            <div>
                                <CustomButton onClick={handleVerify} background='#2F7AEA' textColor='#fff' borderRadius='16px' padding="10px 30px">Verify</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className='font-bold text-md'>
                        Wallet not connected
                    </h1>
                    <p className='text-sm'>
                        Get started by connecting your wallet first
                    </p>
                </div>
            )}
        </div>
    </div>);
}
 
export default Verify;