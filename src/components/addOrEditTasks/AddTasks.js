import {
  Container,
  BackgroundContainer,
  DataContainer,
  Column,
  Label,
  Input,
  Textarea,
  ButtonContainer,
  ReturnButton,
  AddTaskButton,
} from "./styled";
import { useForm } from "react-hook-form";
import { ADD_TASK_QUERY } from "../../functionalComponents/shared/graphql/index";
import { useMutation } from "@apollo/client";

const AddTasks = (props) => {
  const { register, handleSubmit } = useForm();
  const [taskCreate] = useMutation(ADD_TASK_QUERY);

  const sendTaskData = (data) => {
    taskCreate({
      variables: {
        name: data.name,
        description: data.description,
        initialDate: data.initialDate,
        deadline: data.deadline,
      },
    }).then(() => {
      document.location.reload();
    });
  };

  return (
    <BackgroundContainer>
      <Container onSubmit={handleSubmit((data) => sendTaskData(data))}>
        <h3>Add new task</h3>
        <DataContainer>
          <Column>
            <div>
              <Label>Task Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Task Name"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <Label>Initial Date</Label>
              <Input
                name="initialDate"
                type="date"
                placeholder="Initial Date"
                {...register("initialDate", { required: true })}
              />
            </div>
          </Column>
          <Column>
            <div>
              <Label>Description</Label>
              <Textarea
                name="description"
                placeholder="Description"
                {...register("description", { required: true })}
              />
            </div>
            <div>
              <Label>Deadline</Label>
              <Input
                name="deadline"
                type="date"
                placeholder="Task Name"
                {...register("deadline", { required: true })}
              />
            </div>
          </Column>
        </DataContainer>
        <ButtonContainer>
          <ReturnButton onClick={() => props.setOpenPopUp(false)}>Return</ReturnButton>
          <AddTaskButton type="submit">Save task</AddTaskButton>
        </ButtonContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default AddTasks;
