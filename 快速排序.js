//快速排序，一个字就是“快”
//类似 归分排序 ; 讲究分、归、并。归并重点在于如何去合并，快排重点在于如何去划分


function swap(array , i , j){

    [array[i] , array[j]] = [array[j] , array[i]]

}
//swap封装两个元素如何交换；


let array = [7,1,6,5,3,2,4];
let j = 0 ;
let pivot = array[array.length - 1]
for(let i = 0 ; i < array.length ; i++){
    if(array[i] <= pivot){
        swap(array , i , j++)
        console.log(array)
    }else{
        console.log(array)
    }

}

console.log(array)

