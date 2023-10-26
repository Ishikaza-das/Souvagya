import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNavCard from "./UserNavCard";
import Profile from "./Pages/Profile";
import Orders from "./Pages/Orders";
import Address from "./Pages/Address";
import Contact from "./Pages/Contact";

export default function UserNav() {
  return (
    <Router>
      <UserNavCard />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/address" element={<Address />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
