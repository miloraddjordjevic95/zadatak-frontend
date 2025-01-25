import { LeftArrow } from "../../assets";
import { IButtonProps } from "../../interfaces";

function Button({ type, isSubmitting, onClick, children }: IButtonProps): JSX.Element {
  return (
    <>
      {type === "outline-blue" && (
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "solid-blue" && (
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "solid-blue-block" && (
        <button
          type="submit"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          disabled={isSubmitting}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "solid-blue-icon" && (
        <button
          type="button"
          className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={onClick}
        >
          <LeftArrow />
          {children}
        </button>
      )}
      {type === "outline-white" && (
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          data-hs-overlay="#hs-danger-alert"
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "solid-red" && (
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "outline-default-block" && (
        <button
          type="button"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-400 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
