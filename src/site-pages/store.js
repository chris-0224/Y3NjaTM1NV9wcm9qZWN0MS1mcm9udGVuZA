import PageHeader from "../reusuable-components/page-header";
import Banner from "../reusuable-components/banner";
import Footer from "../reusuable-components/page-footer";
import '../stylesheets/store-styles.css'
import {getStoreItems} from "../data-interface";
import {useEffect, useState} from "react";

import doomguy from '../media/doomguy.jpg';
import gamingsetup from '../media/gaming-setup.jpg';
import merch from '../media/merchandise.jpg';

import MediaPromotion from "../reusuable-components/media-promotion";
import {dummyText} from "../data.ts";
import ItemsGrid from "../reusuable-components/items-grid";
import CategoriesGrid from "../reusuable-components/categories-grid";


function ItemFilters(){
    return (
        <div className="filters-container">

        </div>
    )
}
function Body() {
    const [items, setItems] = useState(null);

    const categories = ["Category 1", "Category 2", "Category 3", "Category 4"]

    useEffect(() => {
        setItems(getStoreItems());
    }, []);

    // TODO: make cool changing pictures based on user input
    return (
        <div className="body-container">
            <h2 className="store-header">THE STORE</h2>
            <section className="games section-container">
                <MediaPromotion id="games-promo" title="Lorem Ipsum" img={doomguy} width="700px" desc={dummyText}/>

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
                <div className="leftmost-container">
                    f
                </div>
                <div className="middle-container">
                    <PageHeader/>
                    <Body/>
                </div>
                <div className="rightmost-container">
                    f
                </div>
            </div>
            <Footer/>

        </div>
    );
}
/*
DOOMGUY: <a href="https://wallpapers.com/wallpapers/doomguy-live-gaming-ec02pq3hos4kkijw.html">Wallpaper by johns</a> on Wallpapers.com
Gaming Setup: <a href="https://wallpapers.com/picture/gaming-setup-pictures-0fkb78x32wxfwlbb.html">Wallpaper by timelord</a> on Wallpapers.com
 */