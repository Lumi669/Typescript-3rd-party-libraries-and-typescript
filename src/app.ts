import { Product } from "./product.model";
import "reflect-metadata";

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const p1 = new Product("A book", 12.99);
