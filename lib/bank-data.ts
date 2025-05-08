// Create a new server-side file for bank data
import bankData from '../data/bankData.json';
import type { BankClient } from '@/hooks/use-bank-data';

// Server-side function to get bank client data
export function getBankClientData(userId: string, clientId: number = 10): BankClient | null {
  try {
    // In a real app, you might look up which client ID belongs to this user
    // For now, we just use the provided clientId
    const client = bankData.find(client => client.client_id === clientId);
    return client as BankClient || null;
  } catch (err) {
    console.error('Failed to load bank data:', err);
    return null;
  }
}