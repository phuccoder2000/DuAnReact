import VideoHomepage from "../../assets/video-homepage.mp4"

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                {/* <source  src="/static/home-page/hero/video-1920.webm" 
                type="video/webm" /> */}
                <source src={VideoHomepage}
                    type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="title-1">There's a better way to ask</div>
                <div className="title-2">You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>
                <div className="title-3">
                    <button>Get started - it's free</button>
                </div>

            </div>
        </div>
    )
}
export default HomePage