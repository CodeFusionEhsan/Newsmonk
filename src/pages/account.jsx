import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { UserProfile } from '@clerk/clerk-react'
import {useEffect} from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Account = () => {
    useEffect(() => {
        document.title = "NewsMonk - Made By Ehsan Saleem
    }, [])
    return(
        <div>
            <SignedIn>
                <Navbar />
                <div className="mt-10 pt-8 mb-10 pl-4">
                    <UserProfile />
                </div>
                <Footer />
            </SignedIn>
            <SignedOut>
                <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-2">Welcome to Our Platform</h1>
      <h2 className="text-2xl md:text-4xl mb-4">Your Journey Begins Here</h2>
      <p className="text-lg md:text-xl mb-6">
        Please log in to access exclusive content and features.
      </p>
      <SignInButton className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300" />
    </div>
            </SignedOut>
        </div>
    )
}

export default Account;
