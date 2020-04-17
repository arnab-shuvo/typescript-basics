interface AutomobileInterface{

    brand: string;
    speed: number;
    speedMethod(velocity: number):void

}


const automobile: AutomobileInterface = {
    brand: "BMW",
    speed: 200,
    speedMethod(velocity){
        console.log(`this ${this.brand} is going at ${this.speed} miles an Hour`);
        
    }
}


function car1(automobile:{brand: string,speed: number, speedMethod: (velocity:number)=>void}){
    automobile.speedMethod(3)
}

//  car1(automobile);

class AutomobileClass implements AutomobileInterface{
    brand:string;
    speed:number;
    constructor(brand:string,speed:number){
        this.brand = brand;
        this.speed = speed;

    }
    speedMethod(speed:number){
        console.log('hi My Car is going at '+this.speed+' Miles Per Hour');
        
    }
}

let carObj = new AutomobileClass("BMW",200);

carObj.speedMethod(10000)