import { useEffect, useState } from "react";
import { getTask } from "../../services/taskService/task.service";
import { ITask, Task } from "../task/Task";
import { ButtonToAdd, ListStyle } from "./ListStyle";
import { GrAdd } from "react-icons/gr";
import { Button } from "../button/Button";
import { Dropdown } from "../dropdown/Dropdown";

export function List() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await getTask();
        setTasks(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, []);

  return (
    <ListStyle>
      <div className="ContainerCardList">
        {tasks.length > 0 &&
          tasks.map((task) => {
            return <Task key={task.id} title={task.title} id={""} />;
          })}
      </div>
      <Dropdown />
    </ListStyle>
  );
}
