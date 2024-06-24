import { ReactElement } from "react";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() : ReactElement{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Movies and TV shows app Allego</h1>
            </header>
            <div className='App-Body'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;