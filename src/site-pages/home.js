
import '../stylesheets/home-styles.css';
import NavBar from "../reusuable-components/nav-bar";
import Footer from "../reusuable-components/page-footer";
import ExpandingCards from "../reusuable-components/expanding-cards";
import Banner from "../reusuable-components/banner";

import doomguy from '../media/doomguy.jpg';
import gamingsetup from '../media/gaming-setup.jpg';
import merch from '../media/merchandise.jpg';
import gamingTourn from '../media/gaming-tournament.jpg';
import eldenring from '../media/elden-ring.jpg';

import searchIcon from '../icons/icon-search.svg';
import {dummyText} from "../data.ts";

function Filters(){

    const gamingCategories = ["Games", "Consoles", "Controllers", "Trading Cards", "Board Games"];
    const merchCategories = ["Clothing", "Jewellery", "Toys", "Posters", "Collectibles"];
    const hardwareCategories = ["Desktop Computers", "Monitors", "Keyboards", "Mouses", "Headphones", "Speakers"];

    const genres = ["Arcade","Action","Adventure","Anime","Casual","FPS","Fighting","Horror","Puzzle","RPG","Space","Survival","Sci-Fi","Sports","Strategy","Stealth"];

    return (
        <div className="filters-container">
            <div className="checkbox-group">
                <input type="checkbox" id="lim-edition" name="limited_edition"/>
                <label htmlFor="lim-edition">Limited Edition</label>

                <input type="checkbox" id="on-discount" name="discounted"/>
                <label htmlFor="on-discount">On Sale</label>
            </div>

            <div>
                <label htmlFor="category-select">Category: </label>
                <select id="category-select" name="categories" required>
                    <option value={null}>Choose an Option</option>
                    <hr/>
                    <optgroup label="Gaming">
                        {gamingCategories.map((cat) => {
                            return (
                                <option key={crypto.randomUUID()} value={cat}>{cat}</option>
                            )
                        })}
                    </optgroup>
                    <hr/>
                    <optgroup label="Merchandise">
                        {merchCategories.map((cat) => {
                            return (
                                <option key={crypto.randomUUID()} value={cat}>{cat}</option>
                            )
                        })}
                    </optgroup>
                    <hr/>
                    <optgroup label="Hardware">
                        {hardwareCategories.map((cat) => {
                            return (
                                <option key={crypto.randomUUID()} value={cat}>{cat}</option>
                            )
                        })}
                    </optgroup>
                </select>
            </div>

            <div>
                <label htmlFor="genre-select">Genre: </label>
                <select id="genre-select" name="genres" required>
                    <option value={null}>Choose an Option</option>
                    {genres.map((genre) => {
                        return (
                            <option key={crypto.randomUUID()} value={genre}>{genre}</option>
                        )
                    })}
                </select>
            </div>

            <div>
                <label htmlFor="max-item-price">Max Price: </label>
                <input type="number" min="1" max="2500"/>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id="all-ages" name="all_ages_group"/>
                <label htmlFor="all-ages">All Ages</label>

                <input type="checkbox" id="preteen-group" name="preteen_group"/>
                <label htmlFor="preteen-group">Pre-teen</label>

                <input type="checkbox" id="teen-group" name="teen_group"/>
                <label htmlFor="teen-group">Teen</label>

                <input type="checkbox" id="adult-group" name="adult_group"/>
                <label htmlFor="adult-group">Adult</label>
            </div>

        </div>
    )
}

function ItemSearchForm() {
    function submitForm(e) {
        e.preventDefault();
    }

    return (
        <div className="search-form-container">
            <form className="search-form" onSubmit={submitForm}>
                <h3>FILTERS:</h3>
                <Filters/>
                <br/><br/><br/>

                <div className="search-input-flex-container">
                    <input type="search" placeholder="Search for an item..."/>
                    <button type="submit">
                        <img src={searchIcon} alt="search button"/>
                    </button>
                </div>

            </form>
        </div>
    )
}

function Body() {
    const panelsData = [
        {
            text: "Panel 1",
            imageURL: doomguy,
        },
        {
            text: "Panel 2",
            imageURL: gamingsetup,
        },
        {
            text: "Panel 3",
            imageURL: eldenring,
        },
        {
            text: "Panel 4",
            imageURL: merch,
        },
        {
            text: "Panel 5",
            imageURL: gamingTourn,
        }
    ]

    return (
        <div className="body-container">
            <p className="main-header-paragraph">Delivering the newest and hottest
                <br/>All-things-Gaming&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br/>&nbsp;&nbsp;<span>in speedy time</span>.</p>

            <h2 className="latest-news-header">CHECK OUT THE LATEST NEWS</h2>
            <ExpandingCards panels={panelsData}/>

            <h2 className="latest-event-header">CHECK OUT OUR RECENT EVENT!</h2>
            <div className="video-container">
                <iframe width="640" height="400" src="https://www.youtube.com/embed/LsiaQim9AiY?si=6JDdA-SaIZnGgTLu"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>
            <p className="latest-news-desc">{dummyText}</p>

            <div className="search-item-container">
                <h2 className="section-header type2">LOOKING FOR SOMETHING?</h2>
                <ItemSearchForm/>
            </div>

        </div>
    )
}

function Home() {
    return (
        <div className="homepage-container">
            <div className="grid-container">
                <div className="leftmost-container"></div>
                <div className="middle-container">
                    <NavBar/>
                    <Banner text="Limited-Time Edition: Quisque ut libero nec orci | Get yours today!"/>
                    <Body/>
                </div>
                <div className="rightmost-container"></div>
                <Footer/>
            </div>
        </div>
  );
}

export default Home;

/*
Photo by <a href="https://unsplash.com/@von_co?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ivana Cajina</a> on <a href="https://unsplash.com/photos/milky-way-asuyh-_ZX54?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */