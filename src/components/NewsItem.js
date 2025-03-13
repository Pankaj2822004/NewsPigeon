import React from "react";
//  import spinner from "./spinner";

const NewsItem = (props)=>{ 
  let { title, description, imageUrl, newsUrl, author, date , source } =props;

  const formatDate = (dateString) => {
    if (!dateString) return "Date Unavailable"; // Handle empty or invalid date

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid date format

    // Format the date in a desired format (e.g., MM/DD/YYYY)
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return formattedDate;
  };
  
    return (
      <div className="my-3">
        <div className="card" style={{ width: "16rem", height: "23rem"  , borderColor: "greenyellow" , borderWidth: "4px"}}>
          <img 
            style={{height: "142px"}}
            src={
              !imageUrl
                ? "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww"
                : imageUrl
            }
            className="card-img-top "
            alt="..."
          />
          <div className="card-body" style={{padding: "0px 26px" , margin: "-14px"}}>
            <h5 className="card-title my-3 " style={{ font: "16px" }}>
              {title}
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex: 1 , margin: "1px -116px"}}> ({source})</span></h5>
            <p className="card-text my-1 mx-1">{description}..</p>
            <p className="card-text my-1">
              {" "}
              <small className="text-muted" style={{fontSize: "12px"}}>
                {" "}
                by {author} on {formatDate(date)} ago
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
