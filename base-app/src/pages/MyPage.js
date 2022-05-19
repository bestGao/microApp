import { Link } from "react-router-dom";

function MyPage() {
  return (
    <div className="App">
      {/* <h1>vue应用</h1> */}
      <micro-app
        name="vue-app"
        url="//localhost:3001"
      ></micro-app>
      <Link to="/">跳回主应用</Link>
      <micro-app
        name="react-app"
        url="//localhost:3002"
      ></micro-app>
    </div>
  );
}

export default MyPage;
