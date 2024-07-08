export type UserPaymentMethod = {
  id: number;
  cardholderName: string;
  cardNumber: string;
  paymentMethodId: number;
  userId: number;
  paymentMethod: PaymentMethod;
  user: User;
};

export type PaymentMethod = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
};
