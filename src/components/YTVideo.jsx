import './YTVideo.css';

function YTVideo({ duration, title, channel, views, thumbnail }) {
    return (<div class="video">
        <div class="thumbnail">
            <p class="duration">{duration}</p>
            <img src="https://picsum.photos/250/150" alt="" />
        </div>
        <p class="title">{title}</p>
        <p class="channel">{channel}</p>
        <p class="views">{views}</p>
    </div>);
}

export default YTVideo;