// Mock data for GOLDTRUST AI Customer Portal
// All data is clearly labelled as DEMO/SAMPLE data

export const currentUser = {
  id: 'CUST-2024-001',
  name: 'Priya Sharma',
  email: 'priya.sharma@email.com',
  phone: '+91 98765 43210',
  address: '42, Rose Garden Colony, Koramangala, Bengaluru, Karnataka - 560034',
  avatar: null,
  preferredLanguage: 'English',
  joinedDate: '2024-01-15',
  kycStatus: 'Verified',
};

export const mockValuations = [
  {
    id: 'GT-2024-001',
    jewelleryType: 'Necklace',
    date: '2024-11-10',
    purity: '22K',
    grossWeight: 25.3,
    netGoldWeight: 22.1,
    estimatedValue: 165000,
    jewellersOffer: 148500,
    status: 'Completed',
    certificateId: 'CERT-GT-2024-001',
    testingMethod: 'XRF Test',
    goldRate: 10000,
  },
  {
    id: 'GT-2024-002',
    jewelleryType: 'Bangles',
    date: '2024-11-05',
    purity: '18K',
    grossWeight: 18.7,
    netGoldWeight: 17.2,
    estimatedValue: 107500,
    jewellersOffer: 98200,
    status: 'Pending',
    certificateId: null,
    testingMethod: 'Hallmark Record',
    goldRate: 10000,
  },
  {
    id: 'GT-2024-003',
    jewelleryType: 'Ring',
    date: '2024-10-28',
    purity: '22K',
    grossWeight: 8.5,
    netGoldWeight: 7.8,
    estimatedValue: 58500,
    jewellersOffer: 54000,
    status: 'Completed',
    certificateId: 'CERT-GT-2024-003',
    testingMethod: 'XRF Test',
    goldRate: 10000,
  },
  {
    id: 'GT-2024-004',
    jewelleryType: 'Earrings',
    date: '2024-10-15',
    purity: '24K',
    grossWeight: 12.0,
    netGoldWeight: 11.5,
    estimatedValue: 115000,
    jewellersOffer: null,
    status: 'Under Review',
    certificateId: null,
    testingMethod: 'XRF Test',
    goldRate: 10000,
  },
];

export const mockCertificates = [
  {
    id: 'CERT-GT-2024-001',
    transactionId: 'GT-2024-001',
    jewelleryType: 'Necklace',
    issueDate: '2024-11-10',
    estimatedValue: 165000,
    purity: '22K',
    grossWeight: 25.3,
    netGoldWeight: 22.1,
    goldRate: 10000,
    testingMethod: 'XRF Test',
    customerName: 'Priya Sharma',
    jeweller: {
      name: 'Shree Ram Jewellers',
      address: 'MG Road, Bengaluru',
      licenceNo: 'BIS-KA-2024-0012',
    },
    deductions: [
      { label: 'Stone Weight Deduction', amount: 2000 },
      { label: 'Refining Charges', amount: 3000 },
      { label: 'Wastage Charges', amount: 2000 },
    ],
    jewellersOffer: 148500,
  },
  {
    id: 'CERT-GT-2024-003',
    transactionId: 'GT-2024-003',
    jewelleryType: 'Ring',
    issueDate: '2024-10-28',
    estimatedValue: 58500,
    purity: '22K',
    grossWeight: 8.5,
    netGoldWeight: 7.8,
    goldRate: 10000,
    testingMethod: 'XRF Test',
    customerName: 'Priya Sharma',
    jeweller: {
      name: 'GoldMart Jewellers',
      address: 'Commercial Street, Bengaluru',
      licenceNo: 'BIS-KA-2024-0088',
    },
    deductions: [
      { label: 'Refining Charges', amount: 1500 },
      { label: 'Wastage Charges', amount: 1000 },
    ],
    jewellersOffer: 54000,
  },
];

export const mockHuidData = {
  'HU241100001': {
    huid: 'HU241100001',
    purity: '22K (916)',
    jewelleryType: 'Necklace',
    hallmarkCentre: 'BIS Hallmarking Centre, Bengaluru',
    dateOfHallmarking: '2023-08-15',
    jeweller: 'Shree Ram Jewellers',
    bisLicenceNo: 'BIS-KA-2023-0012',
    status: 'Verified',
    weight: '18.5g',
    description: 'Gold Necklace - Traditional Design',
  },
  'HU241200002': {
    huid: 'HU241200002',
    purity: '18K (750)',
    jewelleryType: 'Ring',
    hallmarkCentre: 'BIS Hallmarking Centre, Mumbai',
    dateOfHallmarking: '2024-02-20',
    jeweller: 'GoldMart Jewellers',
    bisLicenceNo: 'BIS-MH-2024-0056',
    status: 'Verified',
    weight: '5.2g',
    description: 'Gold Ring - Solitaire',
  },
  'HU241300003': {
    huid: 'HU241300003',
    purity: '24K (999)',
    jewelleryType: 'Coin',
    hallmarkCentre: 'BIS Hallmarking Centre, Delhi',
    dateOfHallmarking: '2024-05-10',
    jeweller: 'Tanishq Retail Ltd',
    bisLicenceNo: 'BIS-DL-2024-0023',
    status: 'Verified',
    weight: '10.0g',
    description: 'Gold Coin - 10g',
  },
};

export const dashboardStats = {
  totalValuations: 4,
  completedValuations: 2,
  pendingOffers: 1,
  certificatesGenerated: 2,
};

export const purityOptions = [
  { label: '24K (999 - Pure Gold)', value: '24K', factor: 24 / 24 },
  { label: '22K (916)', value: '22K', factor: 22 / 24 },
  { label: '20K (833)', value: '20K', factor: 20 / 24 },
  { label: '18K (750)', value: '18K', factor: 18 / 24 },
  { label: 'Other / Unknown', value: 'Other', factor: null },
];

export const jewelleryTypes = [
  'Necklace', 'Chain', 'Ring', 'Bangles', 'Earrings', 'Bracelet', 'Other'
];

export const testingMethods = [
  'XRF Test',
  'Hallmark Record',
  'Other Verified Test Report',
  'Not Yet Tested',
];

export const statusColors = {
  'Completed': 'bg-green-50 text-green-700 border border-green-200',
  'Pending': 'bg-amber-50 text-amber-700 border border-amber-200',
  'Under Review': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Cancelled': 'bg-red-50 text-red-700 border border-red-200',
};

export const mockGoldRates = [
  {
    purity: '24K Gold',
    fineness: '999 Fineness (Pure Gold)',
    pricePerGram: 10000,
    pricePer10Gram: 100000,
    change: '+₹45 (+0.45%)',
    trend: 'up',
    description: 'Investment grade bullion & pure gold coins.',
  },
  {
    purity: '22K Gold',
    fineness: '916 Fineness (Standard Jewellery)',
    pricePerGram: 9167,
    pricePer10Gram: 91670,
    change: '+₹40 (+0.44%)',
    trend: 'up',
    description: 'Most popular purity for traditional Indian jewellery.',
  },
  {
    purity: '20K Gold',
    fineness: '833 Fineness',
    pricePerGram: 8333,
    pricePer10Gram: 83330,
    change: '+₹35 (+0.42%)',
    trend: 'up',
    description: 'Common in vintage & heirloom gold ornaments.',
  },
  {
    purity: '18K Gold',
    fineness: '750 Fineness',
    pricePerGram: 7500,
    pricePer10Gram: 75000,
    change: '+₹30 (+0.40%)',
    trend: 'up',
    description: 'Standard for diamond & gemstone studded jewellery.',
  },
  {
    purity: '14K Gold',
    fineness: '585 Fineness',
    pricePerGram: 5833,
    pricePer10Gram: 58330,
    change: '+₹25 (+0.43%)',
    trend: 'up',
    description: 'Contemporary & daily-wear lightweight ornaments.',
  },
];

export const mockTransactionHistory = [
  {
    id: 'TXN-9021',
    type: 'Valuation Completed',
    item: 'Traditional 22K Necklace',
    date: '2024-11-10',
    amount: 148500,
    status: 'Completed',
  },
  {
    id: 'TXN-8840',
    type: 'HUID Verification',
    item: '22K Bangles (HU241100001)',
    date: '2024-11-08',
    amount: null,
    status: 'Verified',
  },
  {
    id: 'TXN-8712',
    type: 'Valuation Generated',
    item: '18K Gold Ring',
    date: '2024-10-28',
    amount: 54000,
    status: 'Completed',
  },
];

