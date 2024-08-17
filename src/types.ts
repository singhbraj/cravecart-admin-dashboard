export type Credentials = {
  email: string;
  password: string;
};

export type Tenant = {
  id: number;
  name: string;
  address: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  tenant: Tenant | null;
};

export type CreateUserData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  tenant: number;
};
