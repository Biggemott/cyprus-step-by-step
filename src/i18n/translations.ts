export const languages = ['en', 'ru', 'el'] as const;

export type Language = (typeof languages)[number];

export const translations: Record<Language, {
  description: string;
  googlePlay: string;
  ios: string;
  iosUnavailable: string;
}> = {
  en: {
    description: 'Practical step-by-step guides for life in Cyprus, with personalised checklists, official source links, progress tracking and reminders.',
    googlePlay: 'Google Play',
    ios: 'iOS version',
    iosUnavailable: 'The iOS version isn’t available yet.\nThanks for your interest — we’ve noted it.',
  },
  ru: {
    description: 'Практические пошаговые инструкции для жизни на Кипре: персональные чек-листы, официальные источники, прогресс и напоминания.',
    googlePlay: 'Google Play',
    ios: 'Версия для iOS',
    iosUnavailable: 'Версия для iOS пока недоступна.\nСпасибо за интерес — мы его учли.',
  },
  el: {
    description: 'Πρακτικοί οδηγοί βήμα προς βήμα για τη ζωή στην Κύπρο, με εξατομικευμένες λίστες ελέγχου, επίσημες πηγές, παρακολούθηση προόδου και υπενθυμίσεις.',
    googlePlay: 'Google Play',
    ios: 'Έκδοση για iOS',
    iosUnavailable: 'Η έκδοση για iOS δεν είναι ακόμη διαθέσιμη.\nΕυχαριστούμε για το ενδιαφέρον σας — το έχουμε καταγράψει.',
  },
};
