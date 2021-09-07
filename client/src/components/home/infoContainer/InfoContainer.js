import { useState } from "react";
import { Container, Ul, UlData, Li, EditImg, TrashImg } from "./styled";
import {
  GET_TASKS_QUERY,
  DELETE_TASK_MUTATION,
  CHECKBOX_RESOLVER_MUTATION,
} from "../../../functionalComponents/shared/graphql/index";
import { useMutation, useQuery } from "@apollo/client";
import EditTasks from "../../addOrEditTasks/EditTasks";

const InfoContainer = () => {
  const { data } = useQuery(GET_TASKS_QUERY);
  const [checkboxResolverMutation] = useMutation(CHECKBOX_RESOLVER_MUTATION);
  const [taskDelete] = useMutation(DELETE_TASK_MUTATION);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [task, setTask] = useState([]);

  //delete task selected
  const deleteTask = (e) => {
    taskDelete({
      variables: {
        id: e,
      },
    }).then(() => {
      document.location.reload();
    });
  };

  //to change completed between selected or not
  const checkboxResolverUpdate = (e) => {
    checkboxResolverMutation({
      variables: {
        completed: Boolean(e),
      },
    }).then(() => {
      document.location.reload();
    });
  };

  // to open popup and send data
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
              value={Boolean(false)}
              defaultChecked={task.completed}
              onChange={(e) => checkboxResolverUpdate(e.target.value)}
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
