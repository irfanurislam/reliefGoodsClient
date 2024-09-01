import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

import { login } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/features/hooks";
import { useLoginMutation } from "../redux/api/authApi";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  // const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [loginMutation] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data);
    try {
      const response = await loginMutation(data).unwrap();
      dispatch(login(response.token));
      localStorage.setItem("token", response.token);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <PHInput type="text" name="email" label="Email"></PHInput>
      </div>
      <div>
        <PHInput type="text" name="password" label="Password:"></PHInput>
      </div>
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
