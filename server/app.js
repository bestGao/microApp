const str = "11+2-3*4+5/2*4+100000/5+10";
function addBrackets(expression) {
  const resultArr = [];

  // 定义运算符
  const symbolArr = ["+", "-", "*", "/"];

  // 定义高优先级运算符
  const highLevelSymbolArr = ["*", "/"];

  // 判断某个字符串是否是运算符
  const isSymbolFn = (str) => symbolArr.includes(str);

  // 判断某个字符串是否是高优先级运算符
  const isHighLevelSymbolFn = (str) => highLevelSymbolArr.includes(str);

  // 输入表达式的长度
  const expLen = expression.length;

  // 标记当前的遍历是否处于高优先级运算符范围
  let isInBracket = false;
  // 记录临时值
  let currentNum = "";

  for (let i = 0; i < expLen; i++) {
    const isSymbol = isSymbolFn(expression[i]);
    const isHighLevelSymbol = isSymbol && isHighLevelSymbolFn(expression[i]);

    // 处理当前字符是运算符的场景
    if (isSymbol) {
      //处理当前字符是高优先级运算符
      if (isHighLevelSymbol) {
        // 如果当前没有被标记为高优先运算符，就在前面加个括号
        if (!isInBracket) {
          currentNum = "(" + currentNum;
        }

        // 修改标记状态
        isInBracket = true;
        currentNum += expression[i];
      } else {
        // 普通运算符

        if (isInBracket) {
          // 如果之前已经在高优先级运算符范围，就需要标记结束
          resultArr.push(currentNum + ")");
          isInBracket = false;
        } else {
          resultArr.push(currentNum);
        }
        resultArr.push(expression[i]);
        currentNum = "";
      }
    } else {
      // 如果是数字，就直接进行记录
      currentNum = currentNum + expression[i];
    }
  }

  if (currentNum) {
    resultArr.push(currentNum + (isInBracket ? ")" : ""));
  }

  return resultArr.join("");
}

// function addBrackets(expression) {
//   const highOperator = ["*", "/"];
//   const lowOperator = ["+", "-"];
//   const numberRegexp = new RegExp(/[0-9]/);
//   let i = 0,
//     j = 1,
//     newStr = "",
//     isHighStr = false,
//     storageJ = 0;
//   while (j < expression.length) {
//     if (lowOperator.includes(expression[j]) && isHighStr) {
//       newStr += `(${expression.substring(i, j)})`;
//       i = storageJ;
//       isHighStr = false;
//     } else if (highOperator.includes(expression[j]) && !isHighStr) {
//       while (numberRegexp.test(expression[--storageJ]))
//         newStr += expression.substring(i, storageJ + 1);
//       i = storageJ + 1;
//       isHighStr = true;
//     }
//     j++;
//     storageJ = j;
//   }
//   newStr += isHighStr
//     ? `(${expression.substring(i, j)})`
//     : expression.substring(i, j);
//   return newStr;
// }

console.log(addBrackets(str));
