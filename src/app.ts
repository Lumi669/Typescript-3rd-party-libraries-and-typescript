import { Product } from "./product.model";
import "reflect-metadata";
// import { plainToClass } from "class-transformer";

const newPro = new Product("rose-cake", -12.99);
console.log("newPro.getInformation = ", newPro.getInformation());

// const products = [
//   { title: "A carpet", price: 29.99 },
//   { title: "A book", price: 10.99 },
//   { title: "A cake", price: 10.86 },
// ];

// const loadedProducts = plainToClass(Product, products);

// for (const prod of loadedProducts) {
//   console.log(prod.getInformation());
// }
