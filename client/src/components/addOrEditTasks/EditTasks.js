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
import { EDIT_TASK_MUTATION } from "../../functionalComponents/shared/graphql/index";
import { useMutation } from "@apollo/client";

const EditTasks = (props) => {
  const { register, handleSubmit, setValue } = useForm();
  const [taskUpdate] = useMutation(EDIT_TASK_MUTATION);

  setValue("id", props.taskData.id, { shouldValidate: true });
  setValue("name", props.taskData.name, { shouldValidate: true });
  setValue("initialDate", props.taskData.initialDate, { shouldValidate: true });
  setValue("description", props.taskData.description, { shouldValidate: true });
  setValue("deadline", props.taskData.deadline, { shouldValidate: true });

  const sendTaskData = (data) => {
    console.log(data);
    taskUpdate({
      variables: {
        id: data.id,
        name: data.name,
        description: data.description,
        initialDate: data.initialDate,
        deadline: data.deadline,
        completed: data.completed,
      },
    }).then(() => {
      document.location.reload();
    });
  };

  return (
    <BackgroundContainer>
      <Container onSubmit={handleSubmit((data) => sendTaskData(data))}>
        <h3>Edit task</h3>
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
          <AddTaskButton type="submit">Edit task</AddTaskButton>
        </ButtonContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default EditTasks;
