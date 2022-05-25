import React, * as reacto from "react";

console.log("看", React, reacto, "相等", React === reacto);

function Counter() {
  // State: a counter value
  const [counter, setCounter] = reacto.useState(0);

  // Action: 当事件发生后，触发状态更新的代码
  const increment = () => {
    setCounter(counter + 1);
  };

  // View: UI 定义
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
