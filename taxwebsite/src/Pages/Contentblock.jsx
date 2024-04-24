import React from 'react';
import '../css/landingcss.css';


const ContentBlock = ({ imageSrc, title, text, align }) => {
    const blockStyle = align === 'right' ? 'content-block right' : 'content-block left';
    return (
        <div className={blockStyle}>
        <img src={imageSrc} alt={title} />

            <div className="content-text">
                     <h2>{title}</h2>
                      <p>{text}</p>
             </div>
    
      </div>
    );
  };
  
  export default ContentBlock;