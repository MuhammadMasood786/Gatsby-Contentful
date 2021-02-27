import React from "react";
import Header from "./header";
import Footer from "./footer";


const Layout = ({ children }) => {
    return (
        <div>
            <Header siteTitle="Gatsby blog by Muhammad Masood" />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>
                    {
                        children
                    }
                </main>
            </div>

            <Footer />
        </div>
    )
}


export default Layout