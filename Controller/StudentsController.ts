const Students = [
  { name: "wisdom", id: 1, age: 13 },
  { name: "dennis", id: 2, age: 10 },
  { name: "joan", id: 3, age: 15 },
];

let newStu = { name: "joan", id: Students.length + 1, age: 15 };

export const CreateStudent = (
  data: Array<{ name: string; id: number; age: number }>,
  value: { name: string; id: number; age: number }
): { name: string; id: number; age: number } => {
  data.push(value);
  return value;
};

export const viewallStudent = (
  data: Array<{ name: string; id: number; age: number }>
): Array<{ name: string; id: number; age: number }> => {
  return data;
};

export const viewoneStudent = (
  data: Array<{ name: string; id: number; age: number }>,
  id: number
): { name: string; id: number; age: number } => {
  let getPro = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getPro;
};
