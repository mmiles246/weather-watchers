import FeedPage from "./FeedPage";
import HomePageBanner from "./HomePageBanner";
import RadarBanner from "./RadarBanner";

function Home ({setLat, setLng, userLocationKey, currentConditions, triggerLocation, getLocation, locate}) {

    return (
        <>
            <div className="home--primary">
                <div className="header-banner">
                        <HomePageBanner  currentConditions={currentConditions} getLocation={getLocation} triggerLocation={triggerLocation} locate={locate}/>
                        <RadarBanner userLocationKey={userLocationKey} />
                        <FeedPage />
                </div>
            </div>
        </>
    )

}

export default Home;