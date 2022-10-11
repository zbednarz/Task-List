import uuid from "react-uuid";
import Typography from "@mui/material/Typography";
import MyInput from "../styles/MyInput";
import { NewTask } from "../styles/MyButton";
import { MyBox } from "../styles/MyForm";
import MySelect from "../styles/MyForm";
import { MenuItem } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const Form = ({ todos, setTodos, setFilter }) => {

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log('data', data)
    setTodos([...todos, { text: data.task, completed: false, id: uuid() }]);
  };

  const options = [
    { text: "All", value: "all" },
    { text: "Completed", value: "completed" },
    { text: "Pending", value: "uncompleted" },
  ];
  return (
    <MyBox noValidate autoComplete="off">
      <form>
        <Controller
          name="task"
          defaultValue={''}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <MyInput
              {...field}
              label={
                <Typography variant="headline" component="h2" color="secondary">
                  {" "}
                  Add Task{" "}
                </Typography>
              }
            />
          )}
        />
      
        <NewTask onClick={handleSubmit(onSubmit)}>Add new task</NewTask>

        <MySelect onChange={filterHandler} defaultValue={"all"}>
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value || ""}>
              {option.text}
            </MenuItem>
          ))}
        </MySelect>
      </form>
    </MyBox>
  );
};

export default Form;
