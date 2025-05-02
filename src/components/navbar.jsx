import React, { useState } from "react";
import { UserItems } from "../context/itemcontext";
import { Link, Outlet } from "react-router-dom";

export function Navbar() {
  const { item, setItem } = UserItems();

  return (
    <>
        <div className="header">
            <ul>
                <li>
                    <Link to={""}><h5>home</h5></Link>
                </li>
                <li>
                    <Link to="/store"><h5>store</h5></Link>
                </li>
                <li>
                    <Link to={"/cart"}>
                        <h5>cart</h5>
                        </Link>
                </li>
                <li><h5>{item.length}</h5></li>
            </ul>
        </div>
        <div className="content">
                <Outlet/>
            </div>
    </>
  );
}