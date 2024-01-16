import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text-white">
        Hello world!
      </h1>
      <Outlet />
    </>
  );
}

export default App;
