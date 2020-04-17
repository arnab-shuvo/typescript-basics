interface AutomobileInterfaceForInheritance{

    brand?: string;
    speed?: number;
    speedMethod?(velocity: number):void

}

interface AutomobileInterface2 extends AutomobileInterfaceForInheritance{
    brand?: string;
}

const automobile2: AutomobileInterface2 = {
    brand: 'BMW'
}

