const Goods = [
  { name: "bread", id: 1, qty: 3 },
  { name: "drinks", id: 2, qty: 10 },
  { name: "water", id: 3, qty: 4 },
];

let newGood = {
  name: "water",
  id: Goods.length + 1,
  qty: 4,
};

export const CreateShop = (
  data: Array<{ name: string; id: number; qty: number }>,
  value: { name: string; id: number; qty: number }
): { name: string; id: number; qty: number } => {
  data.push(value);
  return value;
};

export const viewallShop = (
  data: Array<{ name: string; id: number; qty: number }>
): Array<{ name: string; id: number; qty: number }> => {
  return data;
};

export const viewoneShop = (
  data: Array<{ name: string; id: number; qty: number }>,
  id: number
): { name: string; id: number; qty: number } => {
  let getPro = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getPro;
};
