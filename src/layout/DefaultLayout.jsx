import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <header className="container">header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
