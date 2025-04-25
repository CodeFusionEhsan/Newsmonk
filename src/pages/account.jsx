import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { UserProfile } from '@clerk/clerk-react'

const Account = () => {
    return(
        <div>
            <Navbar />
            <div className="mt-10 pt-8 mb-10 pl-4">
                <UserProfile />
            </div>
            <Footer />
        </div>
    )
}

export default Account;