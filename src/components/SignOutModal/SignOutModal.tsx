import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { ISignOutModalProps } from "../../interfaces";
import Button from "../Button/Button";

function SignOutModal({ setIsModalOpen }: ISignOutModalProps): JSX.Element {
  const { logout } = useAuth()!;
  const navigate = useNavigate();

  function handleSignOut(): void {
    logout();
    setIsModalOpen((curr) => !curr);
    navigate("/");
  }

  return (
    <div
      id="hs-sign-out-alert-small-window"
      className="hs-overlay size-full fixed top-1/2 start-1/1 z-[80] overflow-x-hidden overflow-y-auto"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-sign-out-alert-small-window-label"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-xs sm:w-full m-3 sm:mx-auto">
        <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
          <div className="p-4 sm:p-10 text-center overflow-y-auto">
            <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </span>
            <h3
              id="hs-sign-out-alert-small-window-label"
              className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200"
            >
              Sign Out
            </h3>
            <p className="text-gray-500 dark:text-neutral-500">Are you sure you want to sign out?</p>

            <div className="mt-6 grid gap-y-2">
              <Button type="outline-default-block" onClick={handleSignOut}>
                Sign Out
              </Button>
              <Button type="solid-blue-block" onClick={() => setIsModalOpen((curr) => !curr)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignOutModal;
