export type Task = {
  id: string;
  title: string;
  description?: string;
  critical?: boolean;
  completed?: boolean
};

export const tasks: Task[] = [
  {
    id: "1",
    title: "Create wireframes",
    description: "Initial wireframes for the to-do app",
    critical: true,
  },
  {
    id: "2",
    title: "Design database schema",
    description: "Plan out tables for tasks and user settings",
    critical: false,
  },
];
