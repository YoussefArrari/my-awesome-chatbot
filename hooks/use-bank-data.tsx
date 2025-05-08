
import bankData from '../data/bankData.json';

export type BankClient = {
  client_id: string;
  solde: number;
  statut_carte: string;
  date_ouverture: string;
  nb_operations_mois: number;
  limite_quotidienne: number;
  localisation: string;
  type_credit: string;
  montant_total: number;
  montant_restant: number;
  "taux_annuel (%)": number;
  mensualite: number;
  date_prochaine_echeance: string;
}



// Server-side function for API routes
export function getBankClientData( clientId: string): BankClient | null {
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