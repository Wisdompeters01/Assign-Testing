const Task = [
  { title: "cooking", id: 1, done: true, desc: "boiling the rice" },
  { title: "fighting", id: 2, done: true, desc: "beating" },
  { title: "running", id: 3, done: true, desc: "100km" },
  { title: "sleeping", id: 4, done: true, desc: "long sleep" },
];

let newTask = {
  title: "coding",
  id: Task.length + 1,
  done: true,
  desc: "react ts",
};

export const CreateTask = (
  data: Array<{ title: string; id: number; done: boolean; desc: string }>,
  value: { title: string; id: number; done: boolean; desc: string }
): { title: string; id: number; done: boolean; desc: string } => {
  data.push(value);
  return value;
};

export const viewallTask = (
  data: Array<{ id: number; title: string; done: boolean; desc: string }>
): Array<{ id: number; title: string; done: boolean; desc: string }> => {
  return data;
};

export const viewoneTask = (
  data: Array<{ id: number; title: string; done: boolean; desc: string }>,
  id: number
): { id: number; title: string; done: boolean; desc: string } => {
  let getuser = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getuser;
};

CreateTask(Task, newTask);
