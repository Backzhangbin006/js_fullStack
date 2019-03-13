//玩家1 玩家2...
//object 类
//JSON object 难以完成此job
//玩家类 es5 没有class 关键字
//大写首字母的函数，构造函数
//函数可以用来构建类
//一个函数首字母大写约束，区别于普通函数
// 运行的方式 new，构造函数
//函数是js里的一等对象，js除了基本数据类型之外都是对象object，函数是可以被运行的对象
function Player(name){
    //js函数和其他语言不一样，函数一定会存在一个this，指针，总会指向点什么，常在，答应
    //this指向实例化的对象 
    console.log(this);
     this.name= name;
     this.enemy = null;
}
Player.prototype.win = function(){
    console.log(this.name+"win");
}
Player.prototype.lose = function(){
    console.log(this.name+"lose");
}
//将类实际化 类是一个抽象的概念，对象可以new 出来
//孕育爱情
// 上线的过程
var player1 = new Player("皮蛋");
console.log(player1.name+"上线了");
var player2 = new Player("小乖");
console.log(player2.name+"上线了"); 
// 成为对手的过程
player1.enemy=player2;
player2.enemy=player1;
// 游戏的过程
player1.win();
player2.lose();
// console.log(player1.name);

// console.log(player2.name);