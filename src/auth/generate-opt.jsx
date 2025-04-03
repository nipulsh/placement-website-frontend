import React from "react";
import { useForm } from "react-hook-form";

const GenerateOtp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleFormSubmit(data) {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-black">
        <div className=" w-[30%] flex flex-col gap-3 justify-center items-center">
          <h1>enter your email</h1>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <br />
            <input
              type="email"
              {...register("email")}
              className=" border-white border-2 rounded-md"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default GenerateOtp;
