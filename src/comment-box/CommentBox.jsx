
import { useState } from "react";
import "./CommentBox.css";
const CommentBox = () => {
  
      
  const [isComment, setIsComment] = useState(true);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState({});
  const [currentReply, setCurrentReply] = useState({ commentId: null, text: "" });

  const handleComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, { id: comments.length + 1, text: comment }]);
      setComment("");
    }
  };

  const handleReply = () => {
    if (currentReply.text.trim() !== "") {
      const commentId = currentReply.commentId;
      setReplies({
        ...replies,
        [commentId]: [
          ...(replies[commentId] || []),
          { id: (replies[commentId] || []).length + 1, text: currentReply.text }
        ]
      });
      setCurrentReply({ commentId: null, text: "" });
      setIsComment(true); // Reset to comment mode
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isComment) {
      handleComment();
    } else {
      handleReply();
    }
  };

  const handleReplyClick = (commentId) => {
    setIsComment(false);
    setCurrentReply({ commentId, text: "" });
  };

  return (
    <>
      <section>
        <h2>Comment Section</h2>
        {comments.map((c) => (
          <div key={c.id} className="user">
            <img
              style={{ width: "46px", height: "46px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9v9im_MfdizKe1AT41q_BbfXQ3RGQwwFNw&usqp=CAU"
              alt=""
            />
            <div className="userInfo">
              <p className="name">User</p>
              <p className="comment">{c.text}</p>
              <p className="reply reply-btn" onClick={() => handleReplyClick(c.id)}>Reply</p>
              {replies[c.id] &&
                replies[c.id].map((r) => (
                  <div key={r.id} className="reply">
                    <p>{r.text}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => isComment ? setComment(e.target.value) : setCurrentReply({ ...currentReply, text: e.target.value })}
            value={isComment ? comment : currentReply.text}
            placeholder="Comment here..."
          />
          <button className="submit-btn" type="submit">{isComment ? "Add Comment" : "Add Reply"}</button>
        </form>
      </section>
    </>
  );

 
}

export default CommentBox


