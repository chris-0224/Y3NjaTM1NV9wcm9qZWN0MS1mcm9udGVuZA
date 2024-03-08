
import '../stylesheets/home-styles.css';
import PageHeader from "../reusuable-components/page-header";
import Footer from "../reusuable-components/page-footer";
import ExpandingCards from "../reusuable-components/expanding-cards";
import Banner from "../reusuable-components/banner";

function Body(){
    return (
        <div className="body-container">
            <p>Delivering the newest and hottest
                <br/>All-things-Gaming&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br/>&nbsp;&nbsp;<span>in speedy time</span>.</p>
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
                  <Banner text="Limited-Time Edition: Get yours today!"/>
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