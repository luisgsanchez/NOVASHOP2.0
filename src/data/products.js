const products = [
  { id: "1", title: "Entorno VR Aula", category: "entornos", description: "Aula virtual simple", price: 100 },
  { id: "2", title: "Entorno VR Oficina", category: "entornos", description: "Oficina virtual simple", price: 150 },
];

export const getProducts = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (!categoryId) resolve(products);
      else resolve(products.filter((p) => p.category === categoryId));
    }, 600);
  });

export const getProductById = (itemId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === itemId));
    }, 600);
  });
