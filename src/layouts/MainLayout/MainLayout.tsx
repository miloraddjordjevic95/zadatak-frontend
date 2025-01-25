import { IMainLayoutProps } from "../../interfaces";

function MainLayout({ children }: IMainLayoutProps): JSX.Element {
  return <main className="flex flex-col min-h-screen justify-center items-center">{children}</main>;
}

export default MainLayout;
