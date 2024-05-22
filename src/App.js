import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchVideos from "./Components/SearchVideos";
import './index.css';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex flex-col h-screen">
          <Header/>
          <Body />
        </div>
      ),
      children: [
        { path: "/", element: <MainContainer /> },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchVideos />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className=" ">
        {/* <Header /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
