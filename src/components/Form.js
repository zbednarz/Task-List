import uuid from "react-uuid";
import Typography from "@mui/material/Typography";
import MyInput from "../styles/MyInput";
import { NewTask } from "../styles/MyButton";
import { MyBox } from "../styles/MyForm";
import MySelect from "../styles/MyForm";
import { MenuItem } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const Form = ({ input, setInput, todos, setTodos, setFilter, filter }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: input, completed: false, id: uuid() }]);
    setInput("");
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const options = [
    { text: "All", value: "all" },
    { text: "Completed", value: "completed" },
    { text: "Pending", value: "uncompleted" },
  ];

  return (
    <MyBox noValidate autoComplete="off">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="task"
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
              onChange={inputHandler}
              placeholder="Task"
              type="text"
              value={input}
            />
          )}
        />
        <NewTask onClick={formSubmit} variant="contained">
          Add new task
        </NewTask>
        <Controller
          name="options"
          control={control}
          render={({ field }) => (
            <MySelect
              value={filter}
              defaultValue="all"
              label="Filter"
              {...field} 
              onChange={filterHandler}
            >
              {options.map((option, index) => (
                <MenuItem 
                key={index} 
                value={option.value || ''}>
                {option.text}
                </MenuItem>
              ))}
            </MySelect>
          )}
        />
      </form>
    </MyBox>
  );
};

export default Form;
