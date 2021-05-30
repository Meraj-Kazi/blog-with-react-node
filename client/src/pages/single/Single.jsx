import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import Comments from "../../components/comments/Comments";

export default function Single() {
  return (
    <>
    <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
    <Comments />
    </>
  );
}
