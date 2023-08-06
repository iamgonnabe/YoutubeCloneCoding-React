import React, { useState } from 'react';

function Like() {
    const [isLikeBtnClicked, setIsLikeBtnClicked] = useState(false);
    const [isDislikeBtnClicked, setIsDislikeBtnClicked] = useState(false);
    const [oneValue, setOneValue] = useState(0);

    const handleLikeBtnClick = () => {
        setIsLikeBtnClicked(true);
        setIsDislikeBtnClicked(false);
        setOneValue(0);
    };

    const handleDislikeBtnClick = () => {
        setIsDislikeBtnClicked(true);
        setIsLikeBtnClicked(false);
        setOneValue(1);
    };

    return (
        <ul className="actions">
            <li>
                <button><i className={`like fas fa-thumbs-up ${isLikeBtnClicked ? 'clicked' : ''}`} onClick={handleLikeBtnClick}></i><span>1K</span>
                </button>
            </li>
            <li>
                <button><i className={`dislike fas fa-thumbs-down ${isDislikeBtnClicked ? 'clicked' : ''}`} onClick={handleDislikeBtnClick}></i><span className="plus">{oneValue}</span>
                </button>
            </li>
            <li>
                <button><i className="fas fa-share"></i><span>Share</span></button>
            </li>
            <li>
                <button><i className="fas fa-plus"></i><span>Save</span></button>
            </li>
            <li>
                <button><i className="fab fa-font-awesome-flag"></i><span>Report</span>
                </button>
            </li>
        </ul>

    );
}

export default Like;

