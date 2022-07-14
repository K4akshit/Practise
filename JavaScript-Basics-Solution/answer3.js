class SortArray{
    constructor(obj){
        const arrOfStr = obj.split(',');
        const arrOfNum = arrOfStr.map(str => {
            return Number(str);
          });
        this.originalArray = arrOfNum;
    }

    #sortArray(){
        return this.originalArray.sort(function(a,b){return a-b});
    }
    getSortedArray(){
        return this.#sortArray();
    }

}

const oo = new SortArray("2,7,8");

console.log(oo.getSortedArray());