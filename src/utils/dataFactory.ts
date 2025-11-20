import { randomUUID } from 'crypto';

type AccountType = 'basic' | 'premium' | 'business';
type TxType = 'transfer' | 'deposit' | 'withdrawal';

export function uniqueEmail(prefix = 'user'): string {
  return `${prefix}.${Date.now()}.${Math.floor(Math.random() * 10000)}@example.com`;
}

export function buildUser(
  overrides?: Partial<{ name: string; email: string; accountType: AccountType }>
) {
  return {
    name: overrides?.name || 'John Doe',
    email: overrides?.email || uniqueEmail('fintech'),
    accountType: overrides?.accountType || 'premium',
  };
}

export function buildTransaction(
  userId: string,
  overrides?: Partial<{ amount: number; type: TxType; recipientId: string }>
) {
  return {
    userId,
    amount: overrides?.amount ?? 100.5,
    type: overrides?.type ?? 'transfer',
    recipientId: overrides?.recipientId ?? randomUUID().slice(0, 6),
  };
}
