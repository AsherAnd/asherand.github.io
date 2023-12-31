import Main from "./containers/Main";
import Theme from "./actions/Theme";
import MenuToggle from "./actions/MenuToggle";
import NotFound from "./components/NotFound";
import {
  ProjectDetail,
  ProjectDetailLoader,
} from "./containers/projects/ProjectDetail";
import ProjectNotFound from "./containers/projects/ProjectNotFound";
import Projects from "./containers/Projects";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  // website theme
  const { theme, changeTheme } = Theme();

  // hamburger menu
  const { toggleMenu } = MenuToggle();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<NotFound />} status={404}>
        <Route
          index
          element={
            <Main
              theme={theme}
              changeTheme={changeTheme}
              toggleMenu={toggleMenu}
            />
          }
        />
        <Route path="projects" errorElement={<ProjectNotFound />}>
          <Route index element={<Projects />} />
          <Route
            path=":id"
            index
            element={<ProjectDetail />}
            loader={ProjectDetailLoader}
          />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <div className="overlay" onClick={toggleMenu}></div>
      <div className="grain"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
