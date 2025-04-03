import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onFormSubmit(data) {
    try {
      const response = await fetch("/api/generate-opt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Login response:", result);
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <>
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <div className="w-[30%] h-[70%] black border-2 border-white p-5">
          <div>
            <h1 className="text-4xl font-semibold capitalize">
              Nice to see you!
            </h1>
            <h3 className="mt-3 capitalize">enter the details</h3>
          </div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="mt-7 flex flex-col gap-3"
          >
            <div>
              <label htmlFor="username">username</label>
              <br />
              <input
                type="text"
                name="username"
                {...register("username", { required: "Email is required" })}
                className="w-full border-2 border-solid rounded-md p-2 border-white"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password">password</label>
              <br />
              <input
                type="password"
                name="password"
                {...register("password", { required: "password is required" })}
                className="w-full border-2 border-solid rounded-md p-2 border-white"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="p-2 bg-white text-black">
                submit
              </button>
            </div>
          </form>
          <div>
            <p className="mt-3">
              forget password?{" "}
              <Link to="/reset-password" className="text-[#0075FF]">
                click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
