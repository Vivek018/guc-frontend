import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { routes } from "@/constants";
import { lazyImport } from "@/utils/lazyImports";

const { Auth } = lazyImport(() => import("@/features/auth"), "Auth");
const { Misc } = lazyImport(() => import('@/features/misc'), 'Misc');
const { Project } = lazyImport(() => import('@/features/project'), 'Project');
const { ProjectList } = lazyImport(() => import('@/features/project-list'), 'ProjectList');
const { UserProjectList } = lazyImport(() => import('@/features/user-project-list'), 'UserProjectList');

const Main = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <p>...Loading</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const publicRoutes = [
  {
    path: routes.index,
    element: <Main />,
    children: [
      { index: true, element: <Misc /> },
      { path: routes.projects, element: <ProjectList /> },
      { path: routes.project, element: <Project /> },
      { path: routes.userProjects, element: <UserProjectList /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
  { path: routes.login, element: <Auth /> },
];

