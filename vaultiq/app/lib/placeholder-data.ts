import type { Customer, Invoice } from './definitions';

export const customers: Customer[] = [
  { id: 'c1', name: 'Acme Corp', email: 'contact@acme.com', company: 'Acme Corp' },
  { id: 'c2', name: 'Beta LLC', email: 'hello@beta.com', company: 'Beta LLC' },
];

export const invoices: Invoice[] = [
  {
    id: 'i1',
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    id: 'i2',
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
];