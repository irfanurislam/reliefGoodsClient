import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

import { login } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/features/hooks";
import { useLoginMutation } from "../redux/api/authApi";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const [loginMutation] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await loginMutation(data).unwrap();
      dispatch(login(response.token));
      localStorage.setItem("token", response.token);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      <Form.Item label="Email">
        <Input {...register("email")} />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password {...register("password")} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
