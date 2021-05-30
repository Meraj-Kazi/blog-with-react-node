import { Link } from "react-router-dom";
import "./comments.css";

export default function Comments() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
              <h2>
                <strong>Comments</strong>
                <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
              </h2>
              <div className="singlePostInfo">
                <span>
                  Author:
                  <b className="singlePostAuthor">
                    <Link className="link" to="/posts?username=aaa">
                      Safak
                    </Link>
                  </b>
                </span>
                <span>1 day ago</span>
              </div>
              <p className="singlePostDesc">
                Nice writings. Keep it up!
              </p>
              <br/>

              <p>Share your thoughts in comments: </p>
                <button>
                  <Link className="link" to="/CommentWrite">
                    Make a Comment
                  </Link>
                </button>

                <br/>
                <br/>

            </div>
    </div>
    );
}
