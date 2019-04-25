// 年终奖
// 阿里  14.6w   2.6月
// 美团  16w     4月
// 51信用卡  17w   5月
// s  5
// a  3
// b  2
// d  1
// level key  计算函数？

let stratigies = {
    'S':function(salary) {
        return salary * 5;
    },
    'A':function(salary) {
        return salary * 3
    },
    'B':function(salary) {
        return salary * 2
    },
    'C':function(salary) {
        return salary * 1
    },
    'D':function(salary) {
        return salary * 0
    }
}
function calculate(level, salary) {
    return stratigies[level](salary);
    // 分支
    // if(level === 'S') {
    //     return salary * 5;
    // }
    // if(level === 'A') {
    //     return salary * 3;
    // }
    // if(level === 'B') {
    //     return salary * 2;
    // }
    // if(level === 'C') {
    //     return salary * 2;
    // }
    // if(level === 'D') {
    //     return salary * 0;
    // }
}
    console.log(calculate('S', 10000));