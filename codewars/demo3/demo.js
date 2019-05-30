const people = [
    {age:46,name:'roger'},
    {age:99,name:'vinny'},
    {age:26,name:'don'},
    {age:74,name:'brendan'}
]
var orderPeople = function (people) {
    return people.sort((a,b) => {      //a-b则升序排列，b-a则降序排序
       return a.age - b.age > 0;
    })
}
console.log(orderPeople(people));