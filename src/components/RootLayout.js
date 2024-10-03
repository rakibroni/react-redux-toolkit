import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <TopNavbar />
      <div className="bg-white relative mt-20">
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};
export default RootLayout;
