export const languages = ['en', 'ru', 'el'] as const;

export type Language = (typeof languages)[number];

export const translations: Record<Language, {
  description: string;
  googlePlay: string;
  appStore: string;
}> = {
  en: {
    description: 'Practical step-by-step guides for life in Cyprus, with personalised checklists, official source links, progress tracking and reminders.',
    googlePlay: 'Google Play',
    appStore: 'App Store',
  },
  ru: {
    description: 'Практические пошаговые инструкции для жизни на Кипре: персональные чек-листы, официальные источники, прогресс и напоминания.',
    googlePlay: 'Google Play',
    appStore: 'App Store',
  },
  el: {
    description: 'Πρακτικοί οδηγοί βήμα προς βήμα για τη ζωή στην Κύπρο, με εξατομικευμένες λίστες ελέγχου, επίσημες πηγές, παρακολούθηση προόδου και υπενθυμίσεις.',
    googlePlay: 'Google Play',
    appStore: 'App Store',
  },
};
