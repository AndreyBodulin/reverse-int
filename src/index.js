module.exports = function reverse (n) {
    let answer;
    if (n >= 0){
        let str = String(n);
        let arr = str.split("").reverse().join("");
        console.log(arr);
        answer = Number(String(arr));
    }else {
        n = n * -1;
        let str = String(n);
        let arr = str.split("").reverse().join("");
        console.log(arr);
        answer = Number(String(arr));
    }
  return answer;
}
