// export {};

// function show<T,U>(a:T, b:U): [T, U]{
//     return[a,b];
// }
// show(10, 20);
// show("Le", "Dat");

type Product =  {
    id: number,
    name: string,
}

const product: Product[] = [
        {
        
        id: 1,
        name: "Products A",
        },
        {
            id: 2,
            name: "Products B",
        },
        {
            id: 3,
            name: "Products C",
        }
]
function getProducts(product: Product[]):string {
    const data = product.map(product => product.name);
    return data.join('');
}
const data = getProducts(product);
console.log(data);