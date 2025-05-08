function formatString(input: string, toUpper?: boolean):string{
 
    if(toUpper || typeof toUpper ==='undefined'){
      return(input.toUpperCase()) 
    }else{
      return(input.toLowerCase()) 
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
const filterItem = items.filter(item=> item.rating >=4)
return filterItem
}

function concatenateArrays<T>(...arrays: T[][]): T[]{
let result :T[]=[]
for(let array of arrays){
  result = [...result,...array]
}
return result
}
class Vehicle {
private make:string;
private year:number;
constructor(make:string,
   year:number){
    this.make=make
    this.year=year
   }
   getInfo(){
    return `Make: ${this.make}, Year: ${this.year}`
   }
}
class Car extends Vehicle {
    private model:string;
    constructor(make:string,
      year:number,model:string){
      super(make,year)
        this.model=model
    }
    getModel(){
        return `Model: ${this.model}`
    }
}

function processValue(value: string | number): number{
    if(typeof value ==='string'){
        return value.length
    }else if(typeof value ==='number'){
        return value * 2
    }
    return 0
}

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
   if(products.length===0){
    return null
   }
   let mostExpensive = products[0]
   for(let i=0;i<products.length;i++){
    if(products[i].price > mostExpensive.price){
        mostExpensive =products[i]
    }
   }
   return mostExpensive
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  function getDayType(day: Day): string{
    if(day ===Day.Saturday || day === Day.Sunday){
        return 'weekend'
    }
    return "Weekday";
  }

  async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      throw new Error("Negative number not allowed");
    }
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
  