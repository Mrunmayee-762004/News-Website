import React from "react";
import './Card.css';


function Card(props) {
    let {title,description,urlToImage,Author,Readmore,date,content} = props;
    return (
        <div className='card'>
            <div className="body">
                <img src={urlToImage} />
                <h2 className="title"> {title}</h2>
                <p className="description">
                   {description}
                </p>
                <p className="author"> By author {Author} {date} </p>
                </div>
                <div className="btn">
                <button>
                    <a href={Readmore} target="blank">
                    Read More 
                    </a>
                </button>
                </div>
        </div>
    );
}

export default Card;