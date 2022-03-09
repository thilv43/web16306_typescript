export {}
type Product = {
    id: number;
    name: string;
}

const a: number = 10;
const b: number = 30;
const name: string = "LE TRONG DAT";
const age: number = 20;
const status: boolean = true;
const info: Product= {id: 1, name: "a"};
const stringArr: string[] = ["a","b","c"];
const numberArr: number[] = [1,2,3,4,5,6];
const objectArr: Product[] = [{id: 1}, {id: 2}];


function sum(numA: number, numB: number): number{
    return numA + numB;
}

sum(a,b);