import './App.css';
import img1 from './image/img1.jpg';
import thumnail1 from './image/thumnail1.jpg';
import thumnail2 from './image/thumnail2.jpg';
import thumnail3 from './image/thumnail3.jpg'
import video from './video/video.mp4';
import Detail from './components/Detail';
import Like from './components/Like';

function App() {
  return (
    <div className="App">
      {/* <!-- Header --> */}
      <header>
        <div className="logo">
          <i className="fab fa-youtube"></i>
          <span className="title">Youtube</span>
        </div>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </header>

      {/* <!-- Video Player --> */}
      <section className="player">
        <video controls src={video}></video>
      </section>

      <div className="infoAndUpNext">
        {/* <!-- Video Info --> */}
        <section className="info">
         {/* <!-- Metadata --> */}
          <div className="metadata">
            <ul className="hashtags">
              <li>#HowDeepIsYourLove</li>
              <li>#TommyEmmanuel</li>
              <li>#Guitar</li>
            </ul>
            <Detail />
            <span className="views">10M views 1 month ago</span>
          </div>
          <Like />
          <div className="channel">
            <div className="metadata">
              <img src={img1} alt="" />
              <div className="info">
                <span className="name">침착맨</span>
                <span className="subscribers">2M subcribers</span>
              </div>
            </div>
            <button className="subscribe">subscribe</button>
          </div>
        </section>

        {/* <!-- Up next --> */}
        <section className="upNext">
          <span className="title">Up next</span>
          <ul>
            <li className="item">
              <div className="img"><img src={thumnail3} alt="" /></div>
              <div className="itemInfo">
                <span className="title"
                >후루룩 후루룩</span>
                <span className="name">침착맨</span>
                <span className="views">2M views</span>
              </div>
              <button className="moreBtn"><i className="fas fa-ellipsis-v"></i></button>
            </li>
            <li className="item">
              <div className="img"><img src={thumnail2} alt="" /></div>
              <div className="itemInfo">
                <span className="title"
                >𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 빈지노 정규 2집 노비츠키 전곡 듣기 Beenzino nowitzki full album</span>
                <span className="name">때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ</span>
                <span className="views">300K views</span>
              </div>
              <button className="moreBtn"><i className="fas fa-ellipsis-v"></i></button>
            </li>
            <li className="item">
              <div className="img"><img src={thumnail1} alt="" /></div>
              <div className="itemInfo">
                <span className="title">살인자만 죽이는 사이코패스 (짤리기 전에 빨리 보세요)</span>
                <span className="name">어퍼컷Tube</span>
                <span className="views">1M views</span>
              </div>
              <button className="moreBtn"><i className="fas fa-ellipsis-v"></i></button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
