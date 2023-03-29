import { ITask } from "../../components/task/Task";
import { api } from "../ApiConfig";

//GET
export async function getTask(): Promise<ITask[]> {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error: any) {
    return error;
  }
}

//Post

//Delete

//Update
