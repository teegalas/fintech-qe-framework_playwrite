export const routes = {
  users: '/api/users',
  userById: (id: string) => `/api/users/${id}`,
  transactions: '/api/transactions',
  transactionsByUser: (userId: string) => `/api/transactions/${userId}`,
};
