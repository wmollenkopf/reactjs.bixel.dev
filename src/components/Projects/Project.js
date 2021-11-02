import React from 'react';


const Project = ({props}) => {
    const { title,image,description,tags,url,startYear,endYear,bulletPoints} = props;

    // Set a new endYear value if the endYear is blank for some reason,
    // assume it's a current ongoing event
    const newEndYear = (!endYear||endYear=="")?(new Date()).getFullYear():endYear;

    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <figure className="effect">
                <img src={image} alt={title} />
                <figcaption>
                    <h3>{title}</h3>
                    <p>{description}
                    
                    <ul className="figBullets">{(bulletPoints)?(bulletPoints.map((item,index) => (
						<li key={index} >{item}</li> 
                        ))):""}
                        </ul>
                    </p>
                   
                    <p><strong>Tags:</strong> {(tags)?tags.join (", "):""}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className={(!url||url==="")?"hidden":""}>
                    <span className="icon">
                        <span className="glyphicon glyphicon-new-window"></span>
                    </span>
                    </a>
                </figcaption>
            </figure>
            {(startYear==newEndYear||startYear==""||!startYear)?(newEndYear):(startYear+"-"+newEndYear)}
            
        </div>
    );
}

export default Project;