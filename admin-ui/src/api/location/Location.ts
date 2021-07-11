import { Task } from "../task/Task";

export type Location = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
