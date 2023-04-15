import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route, Routes} from "react-router"; 



const Body = () => {
    return (
        <div> 
                <Routes><Route path="/home" exact element={<Home />} /> </Routes>
                <Routes><Route path="/menu" exact element={<Menu />} /> </Routes>
                <Routes><Route path="/contact" exact element={<Contact />} /></Routes>
                <Routes><Route path="/about" exact element={<About />} /></Routes> 
         
        </div>
    )
}

export default Body 