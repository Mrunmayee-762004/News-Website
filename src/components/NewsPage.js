import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import './Card.css';

const data = require("D:/reacttut/cardapp/src/sampleNews.json");
console.log(data);
function NewsPage() {
    return (
        <div className="container">
            {/* <Card img="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="
       title="CBSE Class 12 pass percentage" desc="NEW DELHI: The number of high scorers continues to rise in the CBSE Class XII Board exams, the results of which were released on Friday."></Card>
      <Card img="https://cdn5.vectorstock.com/i/1000x1000/04/79/breaking-news-template-holographic-globe-vector-27860479.jpg"
       title="Today's 2nd Breaking news" desc="This is card description2"></Card> */}
            {data.map((element, index) => {
                return <Card
                    key={index}
                    title={element.title}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    Author={element.author}
                    Readmore={element.url}
                    date={element.publishedAt}
                    content={element.content}>

                </Card>;
            })}
        </div>

    );
}


export default NewsPage;
