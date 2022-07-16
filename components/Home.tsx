import { DataStore } from "aws-amplify";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { EmailList, Trip } from "../src/models";
import Logo from "./Logo";

export function Hero() {
  return (
    <main>
      <Logo size={500} title="Welcome to One Go" />

      <h3>The one step solution to renting out cars</h3>
    </main>
  );
}

type FormData = { email: string; phone: number; name: string };
export function Form() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>(),
    [loading, setloading] = useState(false);

  const onSubmit = async ({ email, phone: phoneNumber, name }: FormData) => {
    try {
      setloading(true);
      await DataStore.save(new EmailList({ name, email, phoneNumber }));
    } catch (error) {
      console.log("Error uploading email list", error);
    } finally {
      setloading(false);
    }
  };

  // add

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <h2>Got a car? Rent it out and earn money</h2>
      <h3>
        A single car or a small fleet, start by signing up to your news letter
      </h3>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
        type={"text"}
      />
      <p>{errors.name?.message}</p>

      <input
        {...register("phone", {
          required: "Phone is required",
          pattern: {
            value: PhoneREJEX,
            message: "Phone must be 9 characters long",
          },
        })}
        placeholder="Phone"
        type={"number"}
      />
      <p>{errors.phone?.message}</p>

      <input
        {...register("email", {
          required: "Email is requires",
          pattern: {
            value: EmailREJEX,
            message: "Invalid email",
          },
        })}
        placeholder="Email"
        type={"email"}
      />
      <p>{errors.email?.message}</p>

      <input type={"submit"} disabled={loading} />
    </FormComponent>
  );
}
const FormComponent = styled.form`
  background-color: pink;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  height: 500px;
  border-radius: 1rem;
  padding: 1rem 2rem;
  align-self: center;

  p {
    color: red;
    font-size: 20px;
    background-color: blue;
  }
`;

export function MoreInfo() {
  return (
    <>
      <h1>Our mission</h1>
      <h3>
        To become Australias number one rental platform for individual and small
        scale rentals
      </h3>

      <h1>Road map</h1>
      <h3>Thank you to all out supporters</h3>
    </>
  );
}

const EmailREJEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  PhoneREJEX = /^\s*\(?\d{3}\)?(\d{3})(\d{3})\s*$/;
