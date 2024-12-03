import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    // page title
    useEffect(() => {
        document.title = 'MoTeRole - Sign in'
    }, [])
    return (
        <>
            <div className="flex h-screen flex-col justify-center">
                {/* form container*/}
                <div className="container relative mx-auto h-[600px] rounded-[30px] border-[10px] border-grape bg-white/30">
                    {/* title */}
                    <span className="text-shadow container absolute -top-[25%] mx-auto text-center font-bubbles text-9xl text-white">
                        MoTeRole
                    </span>
                    <form
                        action=""
                        className="relative flex h-full w-full flex-col items-center justify-between px-10 pb-10 pt-5 font-nunito font-black"
                    >
                        <div className="flex h-[160px] w-full flex-col">
                            <span className="pl-5 text-2xl text-lava">
                                *Error
                            </span>
                            <input
                                className="flex h-full w-full items-center rounded-3xl border-[6px] border-grape px-5 text-6xl focus:outline-none"
                                type="email"
                                name="signin-email"
                                placeholder="Email"
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="flex h-[160px] w-full flex-col">
                            <span className="pl-5 text-2xl text-lava">
                                *Error
                            </span>
                            <input
                                className="flex h-full w-full items-center rounded-3xl border-[6px] border-grape px-5 text-6xl focus:outline-none"
                                type="text"
                                name="signin-username"
                                placeholder="Username"
                                autoComplete="username"
                                required
                            />
                        </div>
                        <div className="flex h-[160px] w-full flex-col">
                            <span className="pl-5 text-2xl text-lava">
                                *Error
                            </span>
                            <input
                                className="flex h-full w-full items-center rounded-3xl border-[6px] border-grape px-5 text-6xl focus:outline-none"
                                type="password"
                                name="signin-password"
                                placeholder="Password"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                        {/* Sign in / Sign up Buttons */}
                        <div className="absolute -bottom-[20%] flex w-full items-center justify-center space-x-10 text-5xl tracking-normal text-white">
                            <Link
                                to="/signup"
                                className="text-shadow rounded-3xl bg-bluesky px-28 py-5 duration-100 hover:scale-95"
                            >
                                Sign up
                            </Link>
                            <button className="text-shadow rounded-3xl bg-bluesky px-28 py-5 duration-100 hover:scale-95">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn
