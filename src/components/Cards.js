import React, { useState } from "react";

function Cards({id, name, info, price, image, removeTour}) {
 const [readMore, setReadMore] = useState(false);
 const description = readMore ?  info : `${info.substring(0,100)}...`;

 function readMoreHandler()
 {
    setReadMore(!readMore);
 }


  return (
    <div>
      <div className="card">
      <img src={image} className="image" alt=""></img>
 
        <div className="tour-details">
            <div className="tour-price">Rs. {price}</div>
            <div className="tour-info">{name}</div>
        </div>
        <div className="description">{description}
        <span className="read-more" onClick={readMoreHandler}>
            {readMore ?  "show less" :  "read more" }
        </span>
        </div>

        <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default Cards;
