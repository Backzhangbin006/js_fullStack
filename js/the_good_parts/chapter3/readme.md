#语言精粹 读书笔记之对象

1. {}对象字面量
   1.JavaScript的简单类型：数字、字符串、布尔值（true和false）、null值、undefined值，其他值都是对象
   2.对象可以是数组、函数、正则表达式
   3.对象是属性的容器，每个属性都有名字和值，名字可以是任意字符串包括空字符串，属性值是除undef值的任何值
    4.一个对象字面量就是包围在一对花括号中的零或多个“名/值”对
    5.用引号括住“first-name”，逗号用来分隔多个“名/值”对
       var stooge = {
           "first-name":"Jerome",
           "last-name":"Howard"
       }
    6.属性的值可以包括另一个对象字面量在内的任意表达式中获得
      var flight = {
          airline:"Oceanic",
          number:815,
          departure:{
              IATA:"SYD",
              time:"2004-09-24 14:55",
              city:"Sydeny"
          },
          arrival:{
              IATA:"LAX",
              time:"2004-09-23 10:42",
              city:"Los Angeles"
          }
      };
2. 检索
  1.检索时用[]括住一个字符串表达式 stooge["first-name"] //"Joe"
      如果字符串是常数用.表示法 flight.departure.IATA   //"SYD"
     检索一个不存在成员元素值，返回一个undefi值 stoogr["middle-name"] //undef
     ||运算符可以用来填充默认值 var middle = stooge["middle-name"]||"none)";
     检索一个undefined值导致TypeError异常，通过&&运算符来避免
       flight.equipment   //undefined
       flight.equipment.model  //throw "TypeError"
       flight.equipment && flight.equipment.model  //undefined
3.更新
     对象的值通过赋值语句来更新，如果属性名已经存在，则被替换
      stooge["first-name"] = 'Jerome';
      如果之前没有，则该属性被扩充到对象中
      stooge[''middle-name] = 'Lester';
      stooge.nickname = {
          model:'Boeing 777'
      };
      flight.status = 'overdue';
4.引用
  对象通过引用来传递
   var x=stooge;
   x.nickname=''Curly;
   var nick =stooge.nickname  //nick='Curly'
5.原型关系
   是一种动态的关系，如果添加一个新的属性到原型中，该属性会立即对所有基于该原型创建的对象可见
      stooge.profession = 'actor';
      another_stooge.prefession   //'actor'
6.反射
  typeof操作符可以帮助确定属性类型
   typeof flight.number    //'number'
   处理不需要属性：1.让程序检查并删除函数值，2.用hasOwnProperty方法，如果对象拥有独有属性，返回true
     flight.hasOwnProperty（'number'）  //true
     flight.hasOwnProperty('constructor')    //false
7. 枚举
  for in 语句一个对象的所有属性名，可用typeof来排除不需要属性
  想要属性以特定顺序出现，则避免使用for  in 语句，而是创建一个数组
8.删除   detele 运算符用来删除对象属性
