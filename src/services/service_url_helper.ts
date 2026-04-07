export const BASE_URL = "https://clinic-api.tikosoftinnovation.com";

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/login`,
  LOGOUT: `${BASE_URL}/api/logout`,

  // Categories
  CATEGORIES: `${BASE_URL}/api/medicines-categories`,
  CATEGORY: (id: string | number) => `${BASE_URL}/api/medicines-categories/${id}`,

  // Classes
  CLASSES: `${BASE_URL}/api/medicines-classes`,
  CLASS: (id: string | number) => `${BASE_URL}/api/medicines-classes/${id}`,

  // Suppliers
  SUPPLIERS: `${BASE_URL}/api/suppliers`,
  SUPPLIER: (id: string | number) => `${BASE_URL}/api/suppliers/${id}`,

  // Medicines
  MEDICINES: `${BASE_URL}/api/medicines`,
  MEDICINE: (id: string | number) => `${BASE_URL}/api/medicines/${id}`,

  // Patients
  PATIENTS: `${BASE_URL}/api/patients`,
  PATIENT: (id: string | number) => `${BASE_URL}/api/patients/${id}`,
};
