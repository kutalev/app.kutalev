import {adminRoot} from "./config";
import {UserRole} from "../utils/auth.roles";

const data = [
  {
    id: "work",
    icon: "simple-icon-briefcase",
    label: "menu.projects",
    to: `${adminRoot}/tasks`,

    subs: [
      {
        icon: "simple-icon-puzzle",
        label: "На сегодня",
        to: `${adminRoot}/tasks/today`,
        roles: [UserRole.Admin, UserRole.Manager, UserRole.Customer],
      },
      {
        id: "pages-authorization",
        label: "Задачи",
        to: `${adminRoot}/projects/tasks`,
        subs: [
          {
            icon: "iconsminds-wallet",
            label: "На оценку",
            to: `${adminRoot}/projects/tasks/today`
          },
          {
            icon: "iconsminds-check",
            label: "История",
            to: `${adminRoot}/projects/tasks/today`
          },
          {
            icon: "simple-icon-chart",
            label: "Статистика",
            to: `${adminRoot}/projects/tasks/today`
          }
        ]
      },
      {
        id: "pages-authorization",
        label: "Проекты",
        to: `${adminRoot}/projects/tasks`,
        subs: [
          {
            icon: "",
            label: "Все проекты",
            to: `${adminRoot}/projects/tasks/today`
          },
          {
            icon: "",
            label: "История",
            to: `${adminRoot}/projects/tasks/today`
          }
        ]
      },
    ]
  },
  {
    id: "second-menu",
    icon: "iconsminds-coins",
    label: "menu.second-menu",
    to: `${adminRoot}/projects/`,
    subs: [{
      icon: "simple-icon-paper-plane",
      label: "На оценку",
      to: `${adminRoot}/projects/second`,
    },
    ]
  },
  {
    id: "second-menu",
    icon: "iconsminds-coins",
    label: "menu.second-menu",
    to: `${adminRoot}/projects/`,
    subs: [{
      icon: "simple-icon-paper-plane",
      label: "На оценку",
      to: `${adminRoot}/second-menu/second`,
    },
    ]
  },

  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "menu.pages",
    to: "/user/login",
    subs: [{
      icon: "simple-icon-user-following",
      label: "menu.login",
      to: "/user/login",
      newWindow: true
    }, {
      icon: "simple-icon-user-follow",
      label: "menu.register",
      to: "/user/register",
      newWindow: true
    }, {
      icon: "simple-icon-user-unfollow",
      label: "menu.forgot-password",
      to: "/user/forgot-password",
      newWindow: true
    },
      {
        icon: "simple-icon-user-following",
        label: "menu.reset-password",
        to: "/user/reset-password",
        newWindow: true
      }
    ]
  },
  {
    id: "single",
    icon: "iconsminds-check",
    label: "menu.agents",
    to: `${adminRoot}/agents`,
  },

];
export default data;
