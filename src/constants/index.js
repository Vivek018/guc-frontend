export const API_URL = import.meta.env.VITE_API_URL || "";

export const routes = Object.freeze({
  index: '/',
  projects: '/projects',
  userProjects: '/userProjects',
  project: "/project",
  login: '/login'
});

export const endPoints = Object.freeze({
  login: "auth/login",
  user: "auth/me",
  categories: "categories",
  projectList: "projects",
});