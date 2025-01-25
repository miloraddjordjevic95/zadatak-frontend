import { useState } from "react";
import { SignOutModal } from "../../components";
import { MainLayout, NavLayout } from "../../layouts";
import { useAuth } from "../../contexts/AuthContext";

function HomePage(): JSX.Element {
  const { state } = useAuth()!;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <NavLayout setIsModalOpen={setIsModalOpen} />
      <MainLayout>
        {state.user && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                Welcome {state.user.firstName} {state.user.lastName}
              </h1>
            </div>
          </>
        )}
        {isModalOpen && <SignOutModal setIsModalOpen={setIsModalOpen} />}
      </MainLayout>
    </>
  );
}

export default HomePage;
