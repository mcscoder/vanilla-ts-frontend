export type Admin = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type AdminLoginRequest = Pick<Admin, "email" | "password">;

export type AdminRegisterRequest = Pick<
  Admin,
  "firstName" | "lastName" | "email" | "password"
>;
