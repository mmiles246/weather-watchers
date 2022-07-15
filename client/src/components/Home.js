import FeedPage from "./FeedPage";
import HomePageBanner from "./HomePageBanner";


function Home ({userLocationKey, userLocationName, userState, currentConditions, triggerLocation, locate, iconNum}) {

    return (
        <>
            <div className="home--primary">
                <div className="header-banner">
                        <HomePageBanner  currentConditions={currentConditions} userLocationName={userLocationName} userState={userState} triggerLocation={triggerLocation} locate={locate} iconNum={iconNum}/>
                        <FeedPage userLocationName={userLocationName} />
                </div>
            </div>
        </>
    )

}

export default Home;