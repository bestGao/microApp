import React from "react";
import "./App.less";
import Native from "../utils/Native";
// import Counter from "./components/Counter";
// import Counter1 from "./features/counter/Counter";
console.log("Native", Native);

function App() {
  Native.test();
  return (
    <div className="App">
      <header className="App-header">react子应用 测试</header>
      {/* <Counter /> */}
      {/* <Counter1 /> */}
    </div>
  );
}

export default App;
