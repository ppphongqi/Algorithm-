
//冒泡排序，每次循环时相邻元素两两比较，把其中大的元素往后放。
//遍历n次后排序完成。
//时间复杂度为O(n**2)


//交换位置函数
function swap(array , i , j){
    [array[i] , array[j]] = [array[j] , array[i]]
}
//交换位置函数



let array = [6, 7,10,5,4,3,2,1];

//循环（数组长度-1）次即可完成排序，最外层for即为遍历次数
//第二层for即为每次循环时比较次数，每次将较大值排到后面
for(let i = 0 ; i < array.length -1   ; i++){
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] > array[i+1]){
            swap(array , i , i+1)
        }
    }
    console.log(array);
}
