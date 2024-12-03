import React from 'react'
import FullScreen from '../components/FullScreen'

const Menu = () => {
    return (
        <>
            <div className="flex h-screen justify-between p-5">
                {/* left col */}
                <div className="flex flex-col justify-end border">
                    <FullScreen />
                </div>

                {/* center col */}
                <div className="w-[80%] border text-center">
                    <span className="">MoTeRole</span>
                    
                </div>

                {/* right col */}
                <div className="flex flex-col justify-end border">
                    <FullScreen />
                </div>
            </div>
        </>
    )
}

export default Menu
