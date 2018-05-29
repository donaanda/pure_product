import React from 'react';
import '../assets/css/tabs.css';


const YouTubeVideoReviews = (props) => {
    return (
        <div className="youtube-reviews">
            <h4>Youtube Reviews:</h4>
            {props.videoArray.items.map(video =>
                <section key={video.id.videoId}>
                    <div className="video-container">
                        <iframe className="videoPlayer" id="videoPlayer" src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowFullscreen">
                        </iframe>
                    </div>
                    <div className="youtube-title">
                        <h6 key={video.snippet.title}>
                            {video.snippet.title}
                        </h6>
                    </div>
                </section>
            )}
        </div>
    )
}


export default YouTubeVideoReviews;