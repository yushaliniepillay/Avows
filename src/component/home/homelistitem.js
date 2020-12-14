import React from 'react';

const HomeListItem = ({id, title, featureimage})=> {
    return(
        <div>
            <img  src={`http://localhost:1337${featureimage.url}`} />
        </div>
    )
}
export default HomeListItem;