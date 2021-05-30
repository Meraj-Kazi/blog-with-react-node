import "./commentWrite.css";
 
export default function CommentWrite() {
    return (
            <div className="write">
                <form className="writeForm">
                  <div className="writeFormGroup">
                    <textarea
                      placeholder="Write your comment..."
                      type="text"
                      autoFocus={true}
                    />
                  </div>
                  <button className="writeSubmit" type="submit">
                    Publish
                  </button>
                </form>
            </div>
    );
}
