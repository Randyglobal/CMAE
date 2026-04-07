import { ENDPOINTS } from "./service_url_helper";

const TOKEN_KEY = "auth_token";

export const authStorage = {
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  getToken: () => localStorage.getItem(TOKEN_KEY),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

async function request<T>(method: string, url: string, body?: any, token?: string): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const auth = token ?? authStorage.getToken();
  if (auth) headers["Authorization"] = `Bearer ${auth}`;

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    const message = data?.message || data?.error || res.statusText;
    throw new Error(String(message || "Request failed"));
  }

  return data as T;
}

// Auth
export async function login(credentials: { username: string; password: string }) {
  return request<{ success: boolean; message: string; data: any }>("POST", ENDPOINTS.LOGIN, credentials);
}

export async function logout(token?: string) {
  return request<any>("POST", ENDPOINTS.LOGOUT, undefined, token);
}

// Categories
export async function getCategories() {
  return request<any>("GET", ENDPOINTS.CATEGORIES);
}
export async function getCategoryDetails(id: string | number) {
  return request<any>("GET", ENDPOINTS.CATEGORY(id));
}
export async function deleteCategory(id: string | number) {
  return request<any>("DELETE", ENDPOINTS.CATEGORY(id));
}

// Classes
export async function getClasses() {
  return request<any>("GET", ENDPOINTS.CLASSES);
}
export async function getClassDetails(id: string | number) {
  return request<any>("GET", ENDPOINTS.CLASS(id));
}
export async function deleteClass(id: string | number) {
  return request<any>("DELETE", ENDPOINTS.CLASS(id));
}

// Suppliers
export async function getSuppliers() {
  return request<any>("GET", ENDPOINTS.SUPPLIERS);
}
export async function addSupplier(payload: {
  name: string;
  contact_name?: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  tax_id?: string;
  notes?: string;
}) {
  return request<any>("POST", ENDPOINTS.SUPPLIERS, payload);
}
export async function getSupplier(id: string | number) {
  return request<any>("GET", ENDPOINTS.SUPPLIER(id));
}
export async function deleteSupplier(id: string | number) {
  return request<any>("DELETE", ENDPOINTS.SUPPLIER(id));
}

// Medicines
export async function getMedicines(query?: Record<string, any>) {
  let url = ENDPOINTS.MEDICINES;
  if (query) {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([k, v]) => params.append(k, String(v)));
    url = `${url}?${params.toString()}`;
  }
  return request<any>("GET", url);
}
export async function addMedicine(payload: {
  name: string;
  description?: string;
  minimum_stock_threshold: number;
  medicine_category_id: number;
  medicine_classe_id: number;
  suppliers: number[];
}) {
  return request<any>("POST", ENDPOINTS.MEDICINES, payload);
}
export async function getMedicine(id: string | number) {
  return request<any>("GET", ENDPOINTS.MEDICINE(id));
}
export async function updateMedicine(id: string | number, payload: any) {
  return request<any>("PUT", ENDPOINTS.MEDICINE(id), payload);
}
export async function deleteMedicine(id: string | number) {
  return request<any>("DELETE", ENDPOINTS.MEDICINE(id));
}

// Patients
export async function getPatients() {
  return request<any>("GET", ENDPOINTS.PATIENTS);
}
export async function addPatient(payload: { firstname: string; lastname: string; admission_date: string; discharge_date?: string; phone: string; }) {
  return request<any>("POST", ENDPOINTS.PATIENTS, payload);
}
export async function getPatient(id: string | number) {
  return request<any>("GET", ENDPOINTS.PATIENT(id));
}
export async function updatePatient(id: string | number, payload: any) {
  return request<any>("PUT", ENDPOINTS.PATIENT(id), payload);
}
export async function deletePatient(id: string | number) {
  return request<any>("DELETE", ENDPOINTS.PATIENT(id));
}

export default {
  // auth helpers
  login,
  logout,
  authStorage,
  // categories
  getCategories,
  getCategoryDetails,
  deleteCategory,
  // classes
  getClasses,
  getClassDetails,
  deleteClass,
  // suppliers
  getSuppliers,
  addSupplier,
  getSupplier,
  deleteSupplier,
  // medicines
  getMedicines,
  addMedicine,
  getMedicine,
  updateMedicine,
  deleteMedicine,
  // patients
  getPatients,
  addPatient,
  getPatient,
  updatePatient,
  deletePatient,
};
