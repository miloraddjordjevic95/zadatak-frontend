import { useNavigate } from "react-router";
import { Button } from "../../components";

function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        <main id="content">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong!</p>
            <p className="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <Button type="solid-blue-icon" onClick={() => navigate("/")}>
                Back to home page
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NotFoundPage;
