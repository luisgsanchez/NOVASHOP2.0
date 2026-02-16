
export const products = [
  { id: 1, title: "Forro Real Madrid", category: "forros", price: 30000, stock: 10, img: "https://picsum.photos/200" },
  { id: 2, title: "Forro Barcelona", category: "forros", price: 28000, stock: 8, img: "https://picsum.photos/200" },
  { id: 3, title: "Forro Selección Colombia", category: "forros", price: 32000, stock: 5, img: "https://picsum.photos/200" },

  { id: 4, title: "Cargador PSG", category: "cargadores", price: 45000, stock: 12, img: "https://picsum.photos/200" },
  { id: 5, title: "Cargador Manchester City", category: "cargadores", price: 47000, stock: 6, img: "https://picsum.photos/200" },
  { id: 6, title: "Cargador Juventus", category: "cargadores", price: 44000, stock: 9, img: "https://picsum.photos/200" },

  { id: 7, title: "Celular Galaxy Edición Fútbol", category: "celulares", price: 1200000, stock: 3, img: "https://picsum.photos/200" },
  { id: 8, title: "Celular iPhone Edición Fútbol", category: "celulares", price: 4200000, stock: 2, img: "https://picsum.photos/200" },
  { id: 9, title: "Celular Xiaomi Fútbol Pro", category: "celulares", price: 1800000, stock: 4, img: "https://picsum.photos/200" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === Number(id)));
    }, 500);
  });
};
