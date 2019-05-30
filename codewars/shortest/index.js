// const findShort = str => str.split(' ').map(w => w.length).sort((a,b)=>a - b)[0];
//  console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

function findShort(str){
    // return Math.min(...str.split(' ').map(w=>w.length));   //将数组打散，Math.min函数只对数组生效，需要进行打散
    return Math.min.apply(null,str.split(' ').map(w=>w.length));   //apply将数组传递给Math.min
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));