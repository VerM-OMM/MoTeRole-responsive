import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    // page title
    useEffect(() => {
        document.title = 'MoTeRole - Sign up'
    }, [])
    return (
        <>
            <div className="flex h-screen flex-col justify-center">
                {/* form container*/}
                <div className="container relative mx-auto h-[600px] rounded-[30px] border-[10px] border-grape bg-white/30">
                    {/* title */}
                    <span className="text-shadow container absolute -top-[25%] mx-auto text-center font-bubbles text-9xl text-white lg:text-8xl">
                        MoTeRole
                    </span>
                    <form
                        action=""
                        className="relative flex h-full w-full flex-col items-center justify-between px-10 pb-10 pt-5 font-nunito font-black"
                    >
                        {/* student's */}
                        <div className="w-full">
                            <span className="pl-5 text-xl text-black/50">
                                STUDENT
                            </span>
                            <div className="flex space-x-6">
                                {/* first name */}
                                <input
                                    className="flex h-[100px] w-full items-center rounded-3xl border-[6px] border-grape px-5 text-5xl focus:outline-none"
                                    type="text"
                                    name="signup-firstname"
                                    placeholder="Firstname"
                                    autoComplete="firstname"
                                    required
                                />
                                {/* last name */}
                                <input
                                    className="flex h-[100px] w-full items-center rounded-3xl border-[6px] border-grape px-5 text-5xl focus:outline-none"
                                    type="text"
                                    name="signup-lastname"
                                    placeholder="Lastname"
                                    autoComplete="lastname"
                                    required
                                />
                            </div>
                            <div className="mt-5 flex space-x-6">
                                <input
                                    className="flex h-[100px] w-full items-center rounded-3xl border-[6px] border-grape px-5 text-5xl focus:outline-none"
                                    type="text"
                                    name="signup-username"
                                    placeholder="Username"
                                    autoComplete="username"
                                    required
                                />
                                <input
                                    className="flex h-[100px] w-full items-center rounded-3xl border-[6px] border-grape px-5 text-5xl focus:outline-none"
                                    type="text"
                                    name="signup-username"
                                    placeholder="Username"
                                    autoComplete="username"
                                    required
                                />
                            </div>
                        </div>
                        {/* teacher / guardian */}
                        <div className="w-full">
                            <span className="pl-5 text-xl text-black/50">
                                TEACHER / GUARDIAN
                            </span>
                            <div className="flex space-x-6">
                                {/* email */}
                                <input
                                    className="flex h-[100px] w-full items-center rounded-3xl border-[6px] border-grape px-5 text-5xl focus:outline-none"
                                    type="email"
                                    name="signin-email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div className="mt-5 flex space-x-6">
                                {/* password */}
                                <input
                                    className="flex h-[100px] w-full items-center rounded-3xl border-[6px] border-grape px-5 text-5xl focus:outline-none"
                                    type="text"
                                    name="signup-username"
                                    placeholder="Username"
                                    autoComplete="username"
                                    required
                                />
                            </div>
                        </div>
                        {/* Sign in / Sign up Buttons */}
                        <div className="absolute -bottom-[20%] flex w-full items-center justify-center space-x-10 text-5xl tracking-normal text-white">
                            <Link
                                to="/signin"
                                className="text-shadow flex h-20 w-[400px] items-center justify-center text-nowrap rounded-2xl bg-bluesky duration-100 hover:scale-95"
                            >
                                Sign in
                            </Link>
                            <button className="text-shadow flex h-20 w-[400px] items-center justify-center text-nowrap rounded-2xl bg-bluesky duration-100 hover:scale-95">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
