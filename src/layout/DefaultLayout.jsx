import { Outlet } from "react-router";
import Header from "../component/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
