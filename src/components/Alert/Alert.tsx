import { IAlertProps } from "../../interfaces";

function Alert({ type, children }: IAlertProps): JSX.Element {
  return (
    <>
      {type === "success" && (
        <div
          className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
          role="alert"
          tabIndex={-1}
          aria-labelledby="hs-bordered-success-style-label"
        >
          <div className="flex">
            <div className="shrink-0">
              <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
            </div>
            <div className="ms-3">
              <h3 id="hs-bordered-success-style-label" className="text-gray-800 font-semibold dark:text-white">
                Success!
              </h3>
              <p className="text-sm text-gray-700 dark:text-neutral-400">{children}</p>
            </div>
          </div>
        </div>
      )}
      {type === "error" && (
        <div
          className="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30"
          role="alert"
          tabIndex={-1}
          aria-labelledby="hs-bordered-red-style-label"
        >
          <div className="flex">
            <div className="shrink-0">
              <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </span>
            </div>
            <div className="ms-3">
              <h3 id="hs-bordered-red-style-label" className="text-gray-800 font-semibold dark:text-white">
                Error!
              </h3>
              <p className="text-sm text-gray-700 dark:text-neutral-400">{children}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;
