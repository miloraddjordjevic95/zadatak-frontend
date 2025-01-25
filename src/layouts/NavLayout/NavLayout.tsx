import { useNavigate } from "react-router";
import { Button } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { INavLayoutProps } from "../../interfaces";

function NavLayout({ setIsModalOpen }: INavLayoutProps): JSX.Element {
  const { state } = useAuth()!;
  const navigate = useNavigate();

  return (
    <nav className="max-w-[85rem] mx-auto w-full p-4 sm:px-6 lg:px-8 flex basis-full items-center">
      <div className="w-full flex items-center justify-end ms-auto md:justify-end gap-x-1 md:gap-x-3">
        <div className="flex flex-row items-center justify-end gap-1">
          <div className="relative inline-flex px-2">
            <div className="flex flex-row gap-x-2">
              {state.user ? (
                <Button type="solid-red" onClick={() => setIsModalOpen((curr) => !curr)}>
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button type="outline-blue" onClick={() => navigate("/login")}>
                    Sign In
                  </Button>
                  <Button type="solid-blue" onClick={() => navigate("/register")}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavLayout;
