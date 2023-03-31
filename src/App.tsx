import {
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  RouterProvider,
} from "@tanstack/react-router";
import { About, Contact, Design, Home, Location } from "./pages";

const rootRoute = new RootRoute({
  component: Root,
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const designRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/design/$category",
  component: Design,
});
const locationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/location",
  component: Location,
});
const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  designRoute,
  contactRoute,
  locationRoute,
]);

const router = new ReactRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
