import FeedPage from "./FeedPage";
import HomePageBanner from "./HomePageBanner";

function Home ({setLat, setLng, currentConditions, triggerLocation, getLocation, locate}) {

    return (
        <>
            <div className="home--primary">
                <div className="header-banner">
                        <HomePageBanner setLat={setLat} setLng={setLng} currentConditions={currentConditions} getLocation={getLocation} triggerLocation={triggerLocation} locate={locate}/>
                        <FeedPage />
                </div>
            </div>
        </>
    )

}

export default Home;