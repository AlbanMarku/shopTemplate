import { TwitterTweetEmbed } from 'react-twitter-embed';
import YouTube, { YouTubeProps } from 'react-youtube';
import '../styles/social.css';

function Social() {
  const opts: YouTubeProps['opts'] = {
    width: '240',
    height: '247.50',
  };
  return (
    <div className="Social">
      {/* <div className="youtube">
        <YouTube videoId="ceup5CQr_vI" opts={opts} />
      </div>
      <div className="tweet">
        <TwitterTweetEmbed tweetId="933354946111705097" />
      </div>
      <div className="youtube">
        <YouTube videoId="ceup5CQr_vI" opts={opts} />
      </div> */}
      <div className="row">
        <YouTube videoId="ceup5CQr_vI" opts={opts} />
        <h5>ff</h5>
      </div>
    </div>
  );
}

export default Social;
