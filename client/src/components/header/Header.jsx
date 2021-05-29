import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Made with React & Node</span>
        <span className="headerTitleLg">Food Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/2335692/pexels-photo-2335692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
