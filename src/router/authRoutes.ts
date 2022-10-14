import LoginPage from "@/views/auth/loginPage.vue";
import RegisterPage from "@/views/auth/registerPage.vue";
import ResetPassword from "@/views/auth/resetPassword.vue";

export default [
  {
    path: "/login",
    name: "loginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "registerPage",
    component: RegisterPage,
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    component: ResetPassword,
  },
];
