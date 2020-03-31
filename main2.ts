import{
    StringManipulationService
} from "./app-service2";

class ArrayManipulations implements StringManipulationService{
    arrayFindMultiples(myArray: any): Number[] {
        var multiples = [], j=0; 
        for(var i=0;i<myArray.length;i++){
            if(myArray[i]%5 == 0 || myArray[i]%10 == 0){
                multiples[j]=myArray[i];
                j++;
            }
        }
        return multiples;
    }

    arraySeparate(myArray: any): string[] {
        var answer:Array<string>;
        var j=0;
        for(var i=0;i<myArray.length;i++){
            if(typeof(myArray[i])==='string'){
                answer[j]=myArray[i];
                j++;
            }
        }
        return answer;
        
    }

    // arraySplit(myString : string) : Array<number> method is used to find the prime number in the mixed array.
    //  First identify the   numbers in the array, typecast it and then check whether the number is a prime number or not.
    arraySplit(myString: string): number[] {
        let number
        
    }
    arraySort(myArray: any): string[] {
        
    }
    arrayReplace(myArray: any): Number[] {
        
    }
    
}