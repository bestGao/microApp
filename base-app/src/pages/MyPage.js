import { Link } from "react-router-dom";

function MyPage() {
  return (
    <div className="App">
      {/* <h1>vue应用</h1> */}
      <micro-app
        name="vue-app"
        url="//localhost:3000/"
        baseroute="/my-page"
      ></micro-app>
      <Link to="/">跳回主应用</Link>
    </div>
  );
}

export default MyPage;
