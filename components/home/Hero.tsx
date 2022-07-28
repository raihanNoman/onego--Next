import { DataStore } from "aws-amplify";
import React, { forwardRef, ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HomeForm } from "../../constants/FormData";
import Rejex from "../../constants/Rejex";
import { EmailList } from "../../src/models";
import Logo from "../app/Logo";
import HomeBG from "../../public/homeBackground.jpeg";
import { message } from "antd";
import { Image } from "../app/AppComponents";
import styled from "styled-components";

const Form = forwardRef<HTMLFormElement, { element?: JSX.Element }>(
  ({ element }, ref) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<HomeForm>(),
      [loading, setloading] = useState(false);

    const onSubmit = async ({ email, phone, name, numCars: n }: HomeForm) => {
      const phoneNumber = Number(phone);
      const numCars = Number(n);
      try {
        setloading(true);
        await DataStore.save(
          new EmailList({ name, email, phoneNumber, numCars })
        );
        message.success(
          "You application was saved. One of our nice team member will contact you soon."
        );
      } catch (error) {
        message.error("Oops! There seems to be an error");
        console.log("Error form submission: ", error);
      } finally {
        setloading(false);
      }
    };

    const [appear, setappear] = useState(false);
    useEffect(() => {
      setTimeout(() => setappear(true), 1000);
    }, []);

    return (
      <FormComponenet
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
        style={{ right: "10%", top: "10%", opacity: appear ? 1 : 0 }}
      >
        <Logo size={200} />
        <h1>List your cars and get paid</h1>
        <h2>Join our host program</h2>

        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          type={"text"}
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <input
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: Rejex.Phone,
              message: "Phone must be 9 characters long",
            },
          })}
          placeholder="Phone"
          type={"tel"}
        />
        {errors.phone?.message && <p>{errors.phone?.message}</p>}
        <input
          {...register("email", {
            required: "Email is requires",
            pattern: {
              value: Rejex.Email,
              message: "Invalid email",
            },
          })}
          placeholder="Email"
          type={"email"}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <input
          {...register("numCars", {
            required: "Number of cars is requires",
            pattern: {
              value: Rejex.Cars,
              message: "Number of cars is invalud",
            },
          })}
          placeholder="Number of cars"
          type={"number"}
        />
        {errors.numCars?.message && <p>{errors.numCars?.message}</p>}

        <FormSubmit
          type={"submit"}
          disabled={loading}
          style={{ background: "#e6e6e6", border: "none" }}
        />

        {element}
      </FormComponenet>
    );
  }
);

const Hero = ({ children }: { children: ReactNode }) => (
  <Image
    alt="OneGo: Providing the most hospitable service in Australia"
    src={HomeBG}
    style={{ height: "80vh" }}
    priority
  >
    {children}
  </Image>
);
const FormComponenet = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0px 5px 13px #7c7c7c;
  background-color: #ffffff;

  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  padding-inline: 2rem;
  padding-bottom: 1.2rem;

  transition: all 2s ease;

  h1 {
    color: #777777;
    text-align: center;
    font-size: 1.2rem;
    margin-top: -1rem;
  }

  h2 {
    margin-bottom: 1rem;
    margin-top: -0.3rem;
    color: #777777;
    text-align: center;
    font-size: 1rem;
  }

  input {
    border-radius: 5px;
    border: none;
    border-bottom: 1px solid #cecece65;
    height: 40px;
    padding: 1rem 0.7rem;
    margin-block: 0.3rem;
  }

  p {
    color: red;
    font-size: 20px;
    margin-left: 1rem;
  }

  @media only screen and (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    position: static;
    align-self: center;
    margin-top: -30px;
    z-index: 100;
  }
`;

const FormSubmit = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #717171;
`;

export { Form };
export default Hero;
