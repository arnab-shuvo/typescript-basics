function stringFunction():string{
    console.log('Hello Type Script');
    return "asdasd"
    
}


function cal(val1:number, val2:number){
    let total: number =  val1 + val2;
    console.log(total);
    return total;
    
}


let universal: (value1:number, value2: number)=>number;

universal = cal;
console.log(universal(2,2));