import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Form, Select, InputNumber } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddReliefGoodMutation } from "../../redux/api/reliefGoodsApi";
import PHSelect from "../../components/form/PHSelect";
import PHInput from "../../components/form/PHInput";
import PHForm from "../../components/form/PHForm";
import { useNavigate } from "react-router-dom";

type ReliefGoodFormInputs = {
  title: string;
  category: string;
  amount: number;
  description: string;
};

const categories = ["Food Supplies", "Shelter Kits", "Clothing"];
const categoriesOptions = categories.map((item) => ({
  value: item,
  label: item,
}));
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  amount: yup.number().required("Amount is required").positive().integer(),
  description: yup.string().required("Description is required"),
});

const AddReliefGoodForm: React.FC = () => {
  const navigate = useNavigate();

  const [addReliefGood] = useAddReliefGoodMutation();

  const onSubmit = async (data: ReliefGoodFormInputs) => {
    try {
      await addReliefGood(data).unwrap();
      alert("Relief good added successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to add relief good");
    }
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput label="title" name="title" type="text" />
      <PHSelect label="Category" name="category" options={categoriesOptions} />
      <PHInput label="Amount" name="amount" type="text" />
      <PHInput label="description" name="description" type="text" />

      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default AddReliefGoodForm;
