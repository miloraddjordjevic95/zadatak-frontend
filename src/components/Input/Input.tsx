import { IInputProps } from "../../interfaces";

function Input({ type, register, errors }: IInputProps): JSX.Element {
  return (
    <>
      {type === "email" && (
        <div>
          <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Enter your email address..."
              {...register("email")}
              className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
          {errors.email && <p className="text-xs text-red-600 mt-2">{errors.email.message}</p>}
        </div>
      )}
      {type === "firstName" && (
        <div>
          <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">
            First Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name..."
              {...register("firstName")}
              className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
          {errors.firstName && <p className="text-xs text-red-600 mt-2">{errors.firstName.message}</p>}
        </div>
      )}
      {type === "lastName" && (
        <div>
          <label htmlFor="lastName" className="block text-sm mb-2 dark:text-white">
            Last Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name..."
              {...register("lastName")}
              className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
          {errors.lastName && <p className="text-xs text-red-600 mt-2">{errors.lastName.message}</p>}
        </div>
      )}
      {type === "password" && (
        <div>
          <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
              {...register("password")}
              className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
          {errors.password && <p className="text-xs text-red-600 mt-2">{errors.password.message}</p>}
        </div>
      )}
      {type === "confirmPassword" && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm mb-2 dark:text-white">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password..."
              {...register("confirmPassword")}
              className="py-3 px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
          </div>
          {errors.confirmPassword && <p className="text-xs text-red-600 mt-2">{errors.confirmPassword.message}</p>}
        </div>
      )}
    </>
  );
}

export default Input;
