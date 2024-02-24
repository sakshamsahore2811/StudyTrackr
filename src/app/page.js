'use client'
import Header from './components/Header/Header';
import Visualize from './components/Visualize/Visualize';
import Navbar from './components/Navbar/Navbar';
import Track from './components/Track/Track';
import AboutUs from './components/AboutUs/AboutUs';
import Plan from './components/Plan/Plan';
import Try from './components/Try/Try';

export default function Home() {
    return(
        <div>
            <Navbar/>
            <Header/>
            <Visualize/>
            <Track/>
            <Plan/>
            <Try/>
            <AboutUs/>
        </div>
    )
}