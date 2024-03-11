import NavBar from "../reusuable-components/nav-bar";
import Footer from "../reusuable-components/page-footer";
import '../stylesheets/store-styles.css'

import doomguy from '../media/doomguy.jpg';
import darksouls from '../media/darksouls.jpg';
import eldenring from '../media/elden-ring.jpg';
import deadspace from '../media/deadspace.jpg';
import halo from '../media/master-chief.jpg';

import gamingsetup from '../media/gaming-setup.jpg';
import merch from '../media/merchandise.jpg';

import MediaPromotion from "../reusuable-components/media-promotion";
import {dummyText, dummyText2, dummyText3, dummyText4, dummyText5} from "../data.ts";
import ItemsGrid from "../reusuable-components/items-grid";
import CategoriesGrid from "../reusuable-components/categories-grid";
import MediaNavigator from "../reusuable-components/media-navigator";

function Body() {
    const categories = ["Category 1", "Category 2", "Category 3", "Category 4"]
    const mediaList_GAMING = [
        {
            id: "games-promo",
            title: "Lorem Ipsum",
            img: doomguy,
            width: "700px",
            height: "400px",
            desc: dummyText
        },
        {
            id: "games-promo",
            title: "Lorem Ipsum 2",
            img: darksouls,
            width: "700px",
            height: "400px",
            desc: dummyText2
        },
        {
            id: "games-promo",
            title: "Lorem Ipsum 3",
            img: eldenring,
            width: "700px",
            height: "400px",
            desc: dummyText3
        },
        {
            id: "games-promo",
            title: "Lorem Ipsum 4",
            img: deadspace,
            width: "700px",
            height: "400px",
            desc: dummyText4
        },
        {
            id: "games-promo",
            title: "Lorem Ipsum 5",
            img: halo,
            width: "700px",
            height: "400px",
            desc: dummyText5
        }
    ]

    return (
        <div className="body-container">
            <h2 className="store-header">THE STORE</h2>
            <section className="games section-container">
                <MediaNavigator mediaList={mediaList_GAMING}/>
                <h2 className="section-header type1">HOT NEW GAMES</h2>

                <div className="outer-items-grid-container">
                    <ItemsGrid/>
                </div>

                <h2 className="shop-by-category-header">SHOP BY CATEGORY</h2>
                <CategoriesGrid categoryNamesList={categories}/>
            </section>

            <section className="merchandise section-container">
                <h2 className="section-header type2">MERCHANDISE & COLLECTIBLES</h2>

                <MediaPromotion id="merch-promo" title="Lorem Ipsum" img={merch} width="700px"
                                desc={dummyText}/>
                <h2 className="section-header type1">HOT NEW STUFF</h2>
                <div className="outer-items-grid-container">
                    <ItemsGrid/>
                </div>

                <h2 className="shop-by-category-header">SHOP BY CATEGORY</h2>
                <CategoriesGrid categoryNamesList={categories}/>
            </section>

            <section className="hardware section-container">
                <h2 className="section-header type2">GAMING HARDWARE</h2>

                <MediaPromotion id="hardware-promo" title="Lorem Ipsum" img={gamingsetup} width="700px"
                                desc={dummyText}/>
                <h2 className="section-header type1">HOT NEW HARDWARE</h2>
                <div className="outer-items-grid-container">
                    <ItemsGrid/>
                </div>

                <h2 className="shop-by-category-header">SHOP BY CATEGORY</h2>
                <CategoriesGrid categoryNamesList={categories}/>
            </section>

        </div>
    )
}

export default function Store() {
    return (
        <div className="storepage-container">
            <div className="grid-container">
                <div className="leftmost-container"></div>
                <div className="middle-container">
                    <NavBar/>
                    <Body/>
                </div>
                <div className="rightmost-container"></div>
                <Footer/>
            </div>
        </div>
    );
}

/*
DOOMGUY: <a href="https://wallpapers.com/wallpapers/doomguy-live-gaming-ec02pq3hos4kkijw.html">Wallpaper by johns</a> on Wallpapers.com
Gaming Setup: <a href="https://wallpapers.com/picture/gaming-setup-pictures-0fkb78x32wxfwlbb.html">Wallpaper by timelord</a> on Wallpapers.com
master-chief: <a href="https://wallpapers.com/wallpapers/master-chief-gaming-7j0rrexaerjx7yoi.html">Wallpaper by gallaries</a> on Wallpapers.com
elden-ring: <a href="https://wallpapers.com/wallpapers/elden-ring-red-aesthetic-art-1njkjlu18zkxtrys.html">Wallpaper by bigdawg</a> on Wallpapers.com
deadspace: <a href="https://wallpapers.com/wallpapers/dead-space-3-cms-brusilov-ship-hwhs7i5005lkm0pu.html">Wallpaper by toriamos888</a> on Wallpapers.com
darksouls: https://wall.alphacoders.com/big.php?i=528418
*/