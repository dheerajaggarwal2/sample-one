import React from "react";
import "./Comment.css";

const CommentSection = ({ data, callback }) => {

  const replyButtonClick = () => {
    callback(true, data?.id)
  }

  // if (data?.items?.length) {
    return (
      <>
        <div className="commentContainer">
          <img 
            className="imageStyleComment"
            src={data?.image}
            alt={data?.name}
          />
          <div>
            <div
              className="commentText"
            >
              <div>{data?.name}</div>
              <div>{data?.description}</div>
            </div>
            <div
              className="replyContainer"
              onClick={replyButtonClick}
            >
              <span>Reply</span>
            </div>
          </div>
        </div>
        {data?.items?.length &&
          <div className="childItems">
            {data?.items?.map((item, index) => {
              return <CommentSection data={item} key={index} callback={callback} />
            })
            }
          </div>
        }
      </>      
    )
  // } 
  // else {
  //   return (
  //     <div className="commentContainer">
  //         <img 
  //           className="imageStyleComment"
  //           src={data?.image}
  //           alt={data?.name}
  //         />
  //         <div className="commentRight">
  //           <div
  //             className="commentText"
  //           >
  //             <div>{data?.name}</div>
  //             <div>{data?.description}</div>
  //           </div>
  //           <div
  //             className="replyContainer"
  //             onClick={replyButtonClick}
  //           >
  //             <span>Reply</span>
  //           </div>
  //         </div>
  //       </div>
  //   )
  // }
};

export default CommentSection;