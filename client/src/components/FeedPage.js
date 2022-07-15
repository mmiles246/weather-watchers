function FeedPage ({userLocationName}) {

    return (
        <>
        <div className='feed-container'>
            <div className='feed-header'>
                <h1>A Look at</h1>
                <h2>{userLocationName}  </h2>    
            </div>
            <div className='image-feed'>
                Images will be here
            </div>
        </div>
        </>
    )

}

export default FeedPage;