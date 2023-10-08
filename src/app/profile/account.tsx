'use client';

import React, { useEffect, useState } from 'react';
import { useAccount, useBalance } from 'wagmi' // Import the appropriate hook

const Account: React.FC = () => {
    const { address } = useAccount()
    const { data } = useBalance({
        address: address,
      })

    return (
        <div className='flex flex-col gap-16 p-8'>
            <div>
                {address ? (
                    <div className='flex gap-3 bg-white'>
                        <div className='walletBalance font-bold text-white'>
                            {data && 
                            <div className='center flex-col gap-4'>
                                <p>
                                    Wallet Balance
                                </p>
                                <p className='text-md'>
                                    {data.formatted.slice(0, 8)} {data.symbol}
                                </p>
                            </div>
                            }
                        </div>
                        <div className='ml-10 my-auto font-medium flex-col flex gap-4'>
                            <p className=''>
                                Check your wallet balance and copy your wallet address here
                            </p>
                            <div className='text-[.9rem] flex gap-2 p-2 bg-[#F1F6FF] '>
                                <div>
                                    Connected Wallet Address: {address}
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
        </div>
    );
}
 
export default Account;
