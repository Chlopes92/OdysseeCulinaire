import { IProduct } from "mocks/products";

export const getTotalPriceWithExtra = (product: IProduct) => {
    const total = product.extras.reduce((acc, curr) => {
      return !curr.isSelected ? acc : acc += curr.additionalPrice
    }, product.price);
    return total;
  }

