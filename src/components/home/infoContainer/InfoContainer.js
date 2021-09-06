import { useState } from "react";
import { Container, Ul, UlData, Li, EditImg, TrashImg } from "./styled";
import {
  GET_TASKS_QUERY,
  DELETE_TASK_QUERY,
} from "../../../functionalComponents/shared/graphql/index";
import { useMutation, useQuery } from "@apollo/client";
import EditTasks from "../../addOrEditTasks/EditTasks";

const InfoContainer = () => {
  const { loading, error, data } = useQuery(GET_TASKS_QUERY);
  const [taskDelete] = useMutation(DELETE_TASK_QUERY);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [task, setTask] = useState([]);

  const deleteTask = (e) => {
    taskDelete({
      variables: {
        id: e,
      },
    }).then(() => {
      document.location.reload();
    });
  };

  const sendDataToPopUp = (task) => {
    setOpenPopUp(true);
    setTask(task);
  };

  return (
    <Container>
      <Ul>
        <UlData>
          <label>Task Name</label>
          <label>Description</label>
          <label>Initial Date</label>
          <label>Deadline</label>
          <label>Completed</label>
          <label>Edit</label>
          <label>Delete</label>
        </UlData>
        {data?.tasksList?.items?.map((task) => (
          <Li key={task.id}>
            <label>{task.name}</label>
            <label>{task.description}</label>
            <label>{task.initialDate}</label>
            <label>{task.deadline}</label>
            <input
              type="checkbox"
              name="completed"
              id="completed"
            />
            <EditImg onClick={() => sendDataToPopUp(task)} />
            <TrashImg onClick={() => deleteTask(task.id)} />
          </Li>
        ))}
      </Ul>
      {openPopUp && <EditTasks setOpenPopUp={setOpenPopUp} taskData={task} />}
    </Container>
  );
};

export default InfoContainer;
