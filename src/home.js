
import './home-styles.css';
import PageHeader from "./page-header";
import Footer from "./page-footer";
import ExpandingCards from "./expanding-cards";

function Body(){
    return (
        <div className="body-container">
            <p>Delivering the newest and hottest games in speedy time.</p>
            <ExpandingCards/>
        </div>
    )
}
function Home() {
  return (
      <div className="homepage-container">
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

export default Home;

/*
Photo by <a href="https://unsplash.com/@von_co?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ivana Cajina</a> on <a href="https://unsplash.com/photos/milky-way-asuyh-_ZX54?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */