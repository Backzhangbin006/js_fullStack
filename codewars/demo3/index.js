const nums = ['c','a','z','y'];
const nums2 = [1,10,2,28];
console.log(nums.sort());    //sort方法会给字符排序
console.log(nums2.sort(function (a,b) {   //sotr可以接受一个比较函数
    return a - b > 0;
    // console.log(a, b, '------');
}));