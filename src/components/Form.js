import uuid from "react-uuid";
import Typography from "@mui/material/Typography";
import MyInput from "../styles/MyInput";
import { NewTask } from "../styles/MyButton";
import { MyBox } from "../styles/MyForm";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { MyBoxControl } from "../styles/MyBoxControl";
import Holder from "../Holder";
import theme from "../styles/styles";
import { ThemeProvider } from "@mui/material/styles";

const Form = ({ todos, setTodos }) => {
  const schema = object().shape({
    task: string().min(4).max(12).required(),
  });
  const defaultValues = {
    task: "",
  };

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    setTodos([...todos, { text: data.task, completed: false, id: uuid() }]);
    reset(defaultValues);
  };

  return (
    <ThemeProvider theme={theme}>
      <Holder>
        <MyBox noValidate autoComplete="off">
          <MyBoxControl>
            <Controller
              name="task"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <MyInput
                  error={!!fieldState.error}
                  helperText={fieldState?.error?.message}
                  {...field}
                  label={
                    <Typography
                      variant="headline"
                      component="h2"
                      color="secondary"
                    >
                      {" "}
                      Add Task{" "}
                    </Typography>
                  }
                />
              )}
            />

            <NewTask onClick={handleSubmit(onSubmit)}>Add new task</NewTask>
          </MyBoxControl>
        </MyBox>
      </Holder>
    </ThemeProvider>
  );
};

export default Form;
