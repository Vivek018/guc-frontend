export const API_URL = import.meta.env.REACT_APP_API_URL || "";

export const routes = {
  index: '/',
  projects: '/projects',
  userProjects: '/userProjects',
  project: "/projects/:projectId",
  login: '/login'
}

export const endPoints = {
  login: "auth/login",
  refresh: "/refresh",
  getUser: "auth/me",
}