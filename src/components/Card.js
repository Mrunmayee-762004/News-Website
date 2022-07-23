import React from "react";
import './Card.css';


function Card(props) {
    return (
        <div className='card'>
            <div className="body">
                <img src={props.img} />
                <h2 className="title"> {props.title}</h2>
                <p className="description">
                   {props.desc}
                </p>
                </div>
                <div className="btn">
                <button>
                    <a>
                    Read More
                    </a>
                </button>
                </div>
        </div>
    )
}

export default Card