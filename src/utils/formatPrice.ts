export const formatPrice = (price: number | undefined) => {
  if (price) {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

    return formattedPrice;
  }
};
