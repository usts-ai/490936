export const stats = [
  {
    id: 'revenue',
    label: 'Encaissements du mois',
    value: '48 260 €',
    delta: '+18,4 %',
    positive: true,
    accent: '#007BFF',
  },
  {
    id: 'paid',
    label: 'Paiements sécurisés',
    value: '312',
    delta: '+24',
    positive: true,
    accent: '#40E0D0',
  },
  {
    id: 'pending',
    label: 'En attente',
    value: '27',
    delta: '-8',
    positive: true,
    accent: '#00C9FF',
  },
  {
    id: 'incidents',
    label: 'Incidents de paiement',
    value: '4',
    delta: '+1',
    positive: false,
    accent: '#FF5252',
  },
];

export const revenueData = [
  { mois: 'Jan', encaissé: 28400, enAttente: 4200 },
  { mois: 'Fév', encaissé: 31200, enAttente: 3800 },
  { mois: 'Mar', encaissé: 29800, enAttente: 5100 },
  { mois: 'Avr', encaissé: 35600, enAttente: 2900 },
  { mois: 'Mai', encaissé: 40100, enAttente: 3400 },
  { mois: 'Juin', encaissé: 37800, enAttente: 4100 },
  { mois: 'Juil', encaissé: 42900, enAttente: 2700 },
  { mois: 'Août', encaissé: 39200, enAttente: 3200 },
  { mois: 'Sep', encaissé: 45800, enAttente: 3600 },
  { mois: 'Oct', encaissé: 48260, enAttente: 3900 },
];

export const paymentStatus = [
  { name: 'Payé', value: 68, color: '#40E0D0' },
  { name: 'Confirmé', value: 18, color: '#007BFF' },
  { name: 'En attente', value: 10, color: '#00C9FF' },
  { name: 'Incident', value: 4, color: '#FF5252' },
];

export const appointments = [
  {
    id: 'RDV-1042',
    client: 'Camille Dupont',
    pro: 'Dr. Martin',
    structure: 'Cabinet Lumière',
    montant: '95 €',
    statut: 'Payé',
    date: '08 oct. · 09:30',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80',
  },
  {
    id: 'RDV-1041',
    client: 'Lucas Bernard',
    pro: 'Sophie Leroy',
    structure: 'Studio Harmonie',
    montant: '120 €',
    statut: 'Confirmé',
    date: '08 oct. · 11:00',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
  },
  {
    id: 'RDV-1040',
    client: 'Emma Petit',
    pro: 'Dr. Martin',
    structure: 'Cabinet Lumière',
    montant: '75 €',
    statut: 'En attente',
    date: '08 oct. · 14:15',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80',
  },
  {
    id: 'RDV-1039',
    client: 'Noah Moreau',
    pro: 'Julie Roux',
    structure: 'Espace Zen',
    montant: '150 €',
    statut: 'Incident',
    date: '07 oct. · 16:45',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80',
  },
  {
    id: 'RDV-1038',
    client: 'Léa Fontaine',
    pro: 'Sophie Leroy',
    structure: 'Studio Harmonie',
    montant: '110 €',
    statut: 'Payé',
    date: '07 oct. · 10:00',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=80',
  },
];

export const activities = [
  {
    id: 1,
    type: 'paiement',
    titre: 'Paiement Stripe validé',
    detail: 'Camille Dupont · 95 € · Cabinet Lumière',
    time: 'Il y a 4 min',
  },
  {
    id: 2,
    type: 'lien',
    titre: 'Lien personnel envoyé',
    detail: 'Emma Petit · QR + SMS de confirmation',
    time: 'Il y a 18 min',
  },
  {
    id: 3,
    type: 'relance',
    titre: 'Relance automatique',
    detail: 'Noah Moreau · incident carte déclinée',
    time: 'Il y a 42 min',
  },
  {
    id: 4,
    type: 'dossier',
    titre: 'Dossier modifié',
    detail: 'Montant ajusté · Studio Harmonie',
    time: 'Il y a 1 h',
  },
  {
    id: 5,
    type: 'pdf',
    titre: 'Attestation PDF générée',
    detail: 'Léa Fontaine · justificatif de paiement',
    time: 'Il y a 2 h',
  },
];

export const structures = [
  {
    name: 'Cabinet Lumière',
    pros: 4,
    ca: '18,2 k€',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Studio Harmonie',
    pros: 3,
    ca: '14,6 k€',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Espace Zen',
    pros: 2,
    ca: '9,8 k€',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop&q=80',
  },
];

export const roles = [
  { role: 'Gestionnaire', users: 6, color: '#007BFF' },
  { role: 'Assistant', users: 12, color: '#40E0D0' },
  { role: 'Professionnel', users: 28, color: '#00C9FF' },
  { role: 'Client', users: 1240, color: '#92FE9D' },
];
