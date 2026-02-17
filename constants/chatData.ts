export type CategoryType = 'standard' | 'maintenance' | 'urgency' | 'divers';

export interface SubCategory {
  id: string;
  label: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  type: CategoryType;
  subCategories?: SubCategory[];
}

export interface Artisan {
  id: string;
  name: string;
  logo: string;
  specialty: string;
  discount: string;
  code: string;
  phone: string;
}

export const categories: Category[] = [
  {
    id: 'maintenance',
    label: 'Maintenance & Réparations',
    icon: 'Wrench',
    type: 'maintenance',
    subCategories: [
      { id: 'plomberie', label: 'Plomberie (fuite, canalisation, WC)' },
      { id: 'electricite', label: 'Électricité (prise, disjoncteur)' },
      { id: 'chauffage', label: 'Chauffage / Climatisation' },
      { id: 'chauffe-eau', label: 'Chauffe-eau' },
      { id: 'electromenager', label: 'Électroménager' },
      { id: 'menuiserie', label: 'Fenêtre / Porte / Volet' },
      { id: 'humidite', label: 'Humidité / Moisissures' },
      { id: 'nuisibles', label: 'Nuisibles (cafards, souris)' },
      { id: 'autre', label: 'Autre problème' },
    ],
  },
  {
    id: 'administratif',
    label: 'Administratif',
    icon: 'FileText',
    type: 'standard',
    subCategories: [
      { id: 'quittance', label: 'Demande de quittance de loyer' },
      { id: 'attestation', label: 'Attestation de domicile' },
      { id: 'bail', label: 'Renouvellement de bail' },
      { id: 'avenant', label: 'Avenant au contrat' },
      { id: 'coordonnees', label: 'Modification de coordonnées' },
      { id: 'cles', label: 'Duplicata de clés' },
      { id: 'autre', label: 'Autre demande' },
    ],
  },
  {
    id: 'finances',
    label: 'Finances & Paiement',
    icon: 'CreditCard',
    type: 'standard',
    subCategories: [
      { id: 'loyer', label: 'Question sur le montant du loyer' },
      { id: 'charges', label: 'Régularisation des charges' },
      { id: 'echeancier', label: 'Difficultés de paiement' },
      { id: 'depot', label: 'Dépôt de garantie' },
      { id: 'erreur', label: 'Erreur de prélèvement' },
      { id: 'autre', label: 'Autre question' },
    ],
  },
  {
    id: 'entree-sortie',
    label: 'Entrée / Sortie',
    icon: 'DoorOpen',
    type: 'standard',
    subCategories: [
      { id: 'preavis', label: 'Donner mon préavis' },
      { id: 'edl-entree', label: 'État des lieux d\'entrée' },
      { id: 'edl-sortie', label: 'État des lieux de sortie' },
      { id: 'cles', label: 'Remise des clés' },
      { id: 'delai', label: 'Question sur le délai de préavis' },
      { id: 'autre', label: 'Autre demande' },
    ],
  },
  {
    id: 'urgences',
    label: 'Urgences',
    icon: 'AlertTriangle',
    type: 'urgency',
  },
  {
    id: 'parties-communes',
    label: 'Parties communes',
    icon: 'Building',
    type: 'standard',
    subCategories: [
      { id: 'ascenseur', label: 'Ascenseur en panne' },
      { id: 'interphone', label: 'Interphone / Digicode' },
      { id: 'eclairage', label: 'Éclairage parties communes' },
      { id: 'boite-lettres', label: 'Boîte aux lettres' },
      { id: 'parking', label: 'Place de parking' },
      { id: 'autre', label: 'Autre problème' },
    ],
  },
  {
    id: 'voisinage',
    label: 'Voisinage',
    icon: 'Users',
    type: 'standard',
    subCategories: [
      { id: 'bruit', label: 'Nuisances sonores' },
      { id: 'conflit', label: 'Conflit avec un voisin' },
      { id: 'reglement', label: 'Non-respect du règlement' },
      { id: 'autre', label: 'Autre problème' },
    ],
  },
  {
    id: 'assurance',
    label: 'Assurance',
    icon: 'Shield',
    type: 'standard',
    subCategories: [
      { id: 'question', label: 'Question sur l\'assurance habitation' },
      { id: 'sinistre', label: 'Déclaration de sinistre' },
      { id: 'attestation', label: 'Attestation d\'assurance' },
      { id: 'autre', label: 'Autre demande' },
    ],
  },
  {
    id: 'divers',
    label: 'Divers',
    icon: 'HelpCircle',
    type: 'divers',
  },
];

const LOGO_TOKEN = 'pk_PVnaUxNJTB2AFk6oaM2Cug';

export const artisans: Artisan[] = [
  {
    id: '1',
    name: 'HomeServe',
    logo: `https://img.logo.dev/homeserve.com?token=${LOGO_TOKEN}`,
    specialty: 'Multi-services (plomberie, électricité, chauffage)',
    discount: '-15%',
    code: 'JADORELOC15',
    phone: '01 70 82 17 17',
  },
  {
    id: '2',
    name: 'Engie Home Services',
    logo: `https://img.logo.dev/engie.com?token=${LOGO_TOKEN}`,
    specialty: 'Chauffage, climatisation, chauffe-eau',
    discount: '-10%',
    code: 'JADORE10',
    phone: '09 69 39 04 98',
  },
  {
    id: '3',
    name: 'Darty Services',
    logo: `https://img.logo.dev/darty.com?token=${LOGO_TOKEN}`,
    specialty: 'Électroménager, dépannage',
    discount: '-10%',
    code: 'LOCDARTY10',
    phone: '0 978 970 970',
  },
  {
    id: '4',
    name: 'MesDépanneurs.fr',
    logo: `https://img.logo.dev/mesdepanneurs.fr?token=${LOGO_TOKEN}`,
    specialty: 'Plomberie, serrurerie, vitrerie',
    discount: '-20%',
    code: 'JADORE20',
    phone: '09 72 50 50 50',
  },
  {
    id: '5',
    name: 'Leroy Merlin Services',
    logo: `https://img.logo.dev/leroymerlin.fr?token=${LOGO_TOKEN}`,
    specialty: 'Pose, installation, rénovation',
    discount: '-12%',
    code: 'JADORELM12',
    phone: '01 49 17 17 17',
  },
];

export const agencyPhone = '01 23 45 67 89';
export const agencyName = 'Agence Gestion Loc';
