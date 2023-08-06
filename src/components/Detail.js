import React, { useState} from 'react';


function Detail() {
    const [isMoreBtnClicked, setIsMoreBtnClicked] = useState(false);
    const handleMoreBtnClick = () => {setIsMoreBtnClicked(prevState => !prevState);};
    return (
        <div className="titleAndButton">
            <span className={`title ${isMoreBtnClicked ? 'clamp' : ''}`}
                >How Deep Is Your Love [The Bee Gees] | Collaborations | Tommy Emmanuel & John Knowles
            </span>
            <div className={`metadata ${isMoreBtnClicked ? 'clicked' : ''}`}>
                <button className={`moreBtn ${isMoreBtnClicked ? 'clicked' : ''}`} onClick={handleMoreBtnClick}><i className="fas fa-caret-down"></i>
                </button>
            </div>
        </div>
    );
} 
export default Detail;