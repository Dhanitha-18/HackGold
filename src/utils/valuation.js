/**
 * Valuation calculation utilities for GOLDTRUST AI
 */

/**
 * Calculate pure gold equivalent weight
 * @param {number} netGoldWeight - Net gold weight in grams
 * @param {string} purity - Purity string like "22K", "18K" etc.
 * @returns {number} Pure gold equivalent in grams
 */
export function calculatePureGoldEquivalent(netGoldWeight, purity) {
  const karat = parseInt(purity);
  if (!karat || isNaN(karat)) return 0;
  return (netGoldWeight * karat) / 24;
}

/**
 * Calculate estimated intrinsic gold value
 * @param {number} pureGoldEquivalent - Pure gold equivalent in grams
 * @param {number} goldRatePerGram - Current 24K gold rate per gram in INR
 * @returns {number} Estimated value in INR
 */
export function calculateIntrinsicValue(pureGoldEquivalent, goldRatePerGram) {
  return pureGoldEquivalent * goldRatePerGram;
}

/**
 * Calculate net gold weight from gross and non-gold weights
 * @param {number} grossWeight
 * @param {number} nonGoldWeight
 * @returns {number}
 */
export function calculateNetGoldWeight(grossWeight, nonGoldWeight) {
  const net = parseFloat(grossWeight) - parseFloat(nonGoldWeight || 0);
  return Math.max(0, parseFloat(net.toFixed(3)));
}

/**
 * Format Indian currency
 * @param {number} amount
 * @returns {string}
 */
export function formatINR(amount) {
  if (!amount && amount !== 0) return '—';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format weight in grams
 * @param {number} weight
 * @returns {string}
 */
export function formatWeight(weight) {
  if (!weight && weight !== 0) return '—';
  return `${parseFloat(weight).toFixed(2)}g`;
}

/**
 * Calculate offer difference percentage
 * @param {number} estimatedValue
 * @param {number} offeredValue
 * @returns {number}
 */
export function calculateOfferDifference(estimatedValue, offeredValue) {
  if (!estimatedValue || !offeredValue) return 0;
  return ((estimatedValue - offeredValue) / estimatedValue) * 100;
}

/**
 * Generate a mock transaction ID
 * @returns {string}
 */
export function generateTransactionId() {
  const year = new Date().getFullYear();
  const num = Math.floor(Math.random() * 9000) + 1000;
  return `GT-${year}-${num}`;
}

/**
 * Get purity karat factor
 * @param {string} purity
 * @returns {number}
 */
export function getPurityFactor(purity) {
  const karat = parseInt(purity);
  if (!karat || isNaN(karat)) return 0;
  return karat / 24;
}

/**
 * Format date to readable string
 * @param {string} dateString
 * @returns {string}
 */
export function formatDate(dateString) {
  if (!dateString) return '—';
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
