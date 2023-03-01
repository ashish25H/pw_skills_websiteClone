import React from "react";
import NavBar from "./NavBar";
import HeroImg from "./HeroImg";
import HardWork from "./HardWorkShortCutSection";
import Achivers from "./AchiversSection";
import HallOfFame from "./HallOfFameSection";
import PopularPrograms from "./PopularProgramSection";
import Affordable from "./AffordableSection";
import CommunityProgram from "./CommunityProgram";
import Product from "./ProductSection";
import Footer from "./Footer";
const App = () => {
    return(
        <>
        <NavBar />
        <HeroImg />
        <HardWork />
        <Achivers />
        <HallOfFame />
        <PopularPrograms />
        <Affordable />
        <CommunityProgram />
        <Product />
        <Footer />
        </>
    )
}

export default App;