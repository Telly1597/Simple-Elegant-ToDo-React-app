// SIMPLY CREATE A TASK OBJECT
export type Task = {
  id: string;
  title: string;
  description?: string;
  critical?: boolean;
  completed?: boolean;
};

export const tasks: Task[] = [];
