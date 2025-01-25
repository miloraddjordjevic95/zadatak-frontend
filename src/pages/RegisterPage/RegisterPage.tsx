import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { Alert, Button, Input } from "../../components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type TFormInputs = z.infer<typeof schema>;
export { type TFormInputs };

function RegisterPage(): JSX.Element {
  const [error, setError] = useState<string | null>("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<TFormInputs>({
    resolver: zodResolver(schema),
  });

  async function handleFormSubmit(data: TFormInputs): Promise<void> {
    try {
      setError(null);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URI}/register`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong!");
      }
      setError("No error");
      resetField("email");
      resetField("firstName");
      resetField("lastName");
      resetField("password");
      resetField("confirmPassword");
      new Promise((res) =>
        setTimeout(() => {
          res("Navigate");
          navigate("/login");
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
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <Link to="/login">
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                  href="../examples/html/signin.html"
                >
                  {" "}
                  Sign In
                </a>
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="grid gap-y-4">
              <Input type="email" register={register} errors={errors} />
              <Input type="firstName" register={register} errors={errors} />
              <Input type="lastName" register={register} errors={errors} />
              <Input type="password" register={register} errors={errors} />
              <Input type="confirmPassword" register={register} errors={errors} />
              <Button type="solid-blue-block" isSubmitting={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </Button>
              {error && error !== "No error" && <Alert type="error">{error}</Alert>}
              {error === "No error" && <Alert type="success">Registration successful!</Alert>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
