import React from "react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { Button, Form, Input } from "antd";
import { useRegisterMutation } from "../redux/api/authApi";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useNavigate } from "react-router-dom";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<RegisterFormInputs>();

  const [addRegisterMutation] = useRegisterMutation(undefined);
  const navigate = useNavigate();
  // const onSubmit = async (data: FieldValues) => {
  //   try {
  //     await useRegisterMutation(data);
  //     alert("Registration successful");
  //     // window.location.href = "/login";
  //     navigate("/login");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Registration failed");
  //   }
  //   console.log(data);
  // };

  const onSubmit: SubmitHandler<FieldValues> = async (
    data: RegisterFormInputs
  ) => {
    console.log(data);
    try {
      const res = await addRegisterMutation(data);
      console.log(res);
      if (res.error) {
        alert(res.error?.data?.message);
      } else {
        alert("semester create osthirlevel vabhe");
        navigate("/login");
      }
    } catch (err) {
      alert("error here something went wrong");
    }
  };

  return (
    // <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
    //   <Form.Item label="Name">
    //     <Input {...register("name", { required: "Name is required" })} />
    //   </Form.Item>

    //   <Form.Item label="Email">
    //     <Input {...register("email", { required: "Email is required" })} />
    //   </Form.Item>

    //   <Form.Item label="Password">
    //     <Input.Password
    //       {...register("password", { required: "Password is required" })}
    //     />
    //   </Form.Item>

    //   <Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Register
    //     </Button>
    //   </Form.Item>
    // </Form>
    <PHForm onSubmit={onSubmit}>
      <div>
        {/* <label htmlFor="id">ID:</label> */}
        <PHInput type="text" name="name" label="name:"></PHInput>
      </div>
      <div>
        {/* <label htmlFor="id">ID:</label> */}
        <PHInput type="text" name="email" label="email:"></PHInput>
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <PHInput type="text" name="password" label="Password:"></PHInput>
      </div>
      <Button htmlType="submit">Register</Button>
    </PHForm>
  );
};

export default RegisterForm;
