import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input, Alert } from "../../components";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { TFormInputs } from "../RegisterPage/RegisterPage";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

function LoginPage(): JSX.Element {
  const { login } = useAuth()!;
  const [error, setError] = useState<string | null>("");
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<TFormInputs>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  async function handleFormSubmit(data: TFormInputs): Promise<void> {
    try {
      setError(null);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URI}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong.");
      }
      const responseData = await res.json();
      resetField("email");
      resetField("password");
      login(responseData.user, responseData.token);
      localStorage.setItem("token", responseData.token);
      setError("No error");
      new Promise((res) =>
        setTimeout(() => {
          res("Navigate");
          navigate("/");
        }, 2000),
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  }

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className="mt-7 w-96 bg-white border border-gray-400 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className=" pb-4 text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign In</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don't have an account?
              <Link to="/register">
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                  href="../examples/html/signup.html"
                >
                  {" "}
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col gap-y-4">
              <Input type="email" register={register} errors={errors} />
              <Input type="password" register={register} errors={errors} />
              <Button type="solid-blue-block" isSubmitting={isSubmitting}>
                {isSubmitting ? "Loading..." : "Sign In"}
              </Button>
              {error && error !== "No error" && <Alert type="error">{error}</Alert>}
              {error === "No error" && <Alert type="success">Signed in successfully!</Alert>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
