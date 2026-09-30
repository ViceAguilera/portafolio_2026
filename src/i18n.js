import { createContext, useContext } from 'react';

export const LangContext = createContext('es');

// Resuelve un texto { es, en } al idioma dado; cualquier otro valor pasa tal cual
export function translate(value, lang) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value[lang] : value;
}

export function useT() {
  const lang = useContext(LangContext);
  return (value) => translate(value, lang);
}

export function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch { /* storage bloqueado: se usa el idioma del navegador */ }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}
