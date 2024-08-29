import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";
import { useRegisterMutation } from "../redux/api/authApi";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  //   const [registerMutation] = useRegisterMutation();

  const onSubmit = async (data: RegisterFormInputs) => {
    // try {
    //   await registerMutation(data).unwrap();
    //   alert("Registration successful");
    //   window.location.href = "/login";
    // } catch (error) {
    //   console.error(error);
    //   alert("Registration failed");
    // }
    console.log(data);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      <Form.Item label="Name">
        <Input {...register("name", { required: "Name is required" })} />
      </Form.Item>

      <Form.Item label="Email">
        <Input {...register("email", { required: "Email is required" })} />
      </Form.Item>

      <Form.Item label="Password">
        <Input.Password
          {...register("password", { required: "Password is required" })}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
