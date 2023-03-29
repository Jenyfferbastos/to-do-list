import { ContainerButtons, TaskStyle, TextTask } from "./TaskStyle";
import { MdOutlineDone } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { Button } from "../button/Button";

export interface ITask {
  id: string;
  title: string;
}

export function Task({ title }: ITask) {
  return (
    <TaskStyle>
      <div>
        <TextTask>{title}</TextTask>
      </div>
      <ContainerButtons>
        <Button>
          <MdOutlineDone color="white" />
        </Button>
        <Button>
          <FiEdit color="white" />
        </Button>
        <Button>
          <TiDeleteOutline color="white" />
        </Button>
      </ContainerButtons>
    </TaskStyle>
  );
}
