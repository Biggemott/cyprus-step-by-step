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

export const supportTranslations: Record<Language, {
  support: string;
  intro: string;
  contactTitle: string;
  contactText: string;
  contactNote: string;
  faqTitle: string;
  faqDataQuestion: string;
  faqDataAnswer: string;
  faqAnalyticsQuestion: string;
  faqAnalyticsAnswer: string;
  faqNotificationsQuestion: string;
  faqNotificationsAnswer: string;
  faqDeleteQuestion: string;
  faqDeleteAnswer: string;
  faqOfficialQuestion: string;
  faqOfficialAnswer: string;
  privacyPolicy: string;
  download: string;
}> = {
  en: {
    support: 'Support',
    intro: 'A free app with practical step-by-step guides for life in Cyprus.',
    contactTitle: 'Contact us',
    contactText: 'Questions, feedback or a problem with the app? Email us:',
    contactNote: 'You can also report an issue with a step from inside the app.',
    faqTitle: 'Frequently asked questions',
    faqDataQuestion: 'Where is my data stored?',
    faqDataAnswer: 'Your progress, answers and reminders stay on your device. There is no account.',
    faqAnalyticsQuestion: 'How do I turn analytics on or off?',
    faqAnalyticsAnswer: 'Use the Usage analytics toggle at the bottom of the Home screen. It is off until you turn it on.',
    faqNotificationsQuestion: 'Reminders and notifications are not arriving. What can I do?',
    faqNotificationsAnswer: 'Check that notifications are allowed for the app in your device’s system settings.',
    faqDeleteQuestion: 'How do I delete my data?',
    faqDeleteAnswer: 'Deleting the app removes all data stored on your device. For analytics data already sent, see the privacy policy.',
    faqOfficialQuestion: 'Is this an official government app?',
    faqOfficialAnswer: 'No. Independent guide. Not affiliated with the Government of Cyprus or any public authority.',
    privacyPolicy: 'Privacy policy',
    download: 'Download the app',
  },
  ru: {
    support: 'Поддержка',
    intro: 'Бесплатное приложение с практическими пошаговыми инструкциями для жизни на Кипре.',
    contactTitle: 'Связаться с нами',
    contactText: 'Вопросы, отзывы или проблема с приложением? Напишите нам:',
    contactNote: 'О проблеме с конкретным шагом можно сообщить и прямо в приложении.',
    faqTitle: 'Частые вопросы',
    faqDataQuestion: 'Где хранятся мои данные?',
    faqDataAnswer: 'Прогресс, ответы и напоминания хранятся на вашем устройстве. Аккаунт не нужен.',
    faqAnalyticsQuestion: 'Как включить или выключить аналитику?',
    faqAnalyticsAnswer: 'Используйте переключатель «Аналитика использования» внизу главного экрана. Он выключен, пока вы его не включите.',
    faqNotificationsQuestion: 'Не приходят напоминания и уведомления. Что делать?',
    faqNotificationsAnswer: 'Проверьте в системных настройках устройства, что уведомления для приложения разрешены.',
    faqDeleteQuestion: 'Как удалить мои данные?',
    faqDeleteAnswer: 'При удалении приложения удаляются все данные на устройстве. Об уже отправленных данных аналитики — в политике конфиденциальности.',
    faqOfficialQuestion: 'Это официальное государственное приложение?',
    faqOfficialAnswer: 'Нет. Независимый гид. Не связан с правительством Кипра и государственными органами.',
    privacyPolicy: 'Политика конфиденциальности',
    download: 'Скачать приложение',
  },
  el: {
    support: 'Υποστήριξη',
    intro: 'Δωρεάν εφαρμογή με πρακτικούς οδηγούς βήμα προς βήμα για τη ζωή στην Κύπρο.',
    contactTitle: 'Επικοινωνία',
    contactText: 'Ερωτήσεις, σχόλια ή πρόβλημα με την εφαρμογή; Γράψτε μας:',
    contactNote: 'Μπορείτε επίσης να αναφέρετε πρόβλημα με ένα βήμα μέσα από την εφαρμογή.',
    faqTitle: 'Συχνές ερωτήσεις',
    faqDataQuestion: 'Πού αποθηκεύονται τα δεδομένα μου;',
    faqDataAnswer: 'Η πρόοδος, οι απαντήσεις και οι υπενθυμίσεις σας μένουν στη συσκευή σας. Δεν χρειάζεται λογαριασμός.',
    faqAnalyticsQuestion: 'Πώς ενεργοποιώ ή απενεργοποιώ την ανάλυση χρήσης;',
    faqAnalyticsAnswer: 'Χρησιμοποιήστε τον διακόπτη «Ανάλυση χρήσης» στο κάτω μέρος της αρχικής οθόνης. Είναι απενεργοποιημένος μέχρι να τον ενεργοποιήσετε.',
    faqNotificationsQuestion: 'Δεν λαμβάνω υπενθυμίσεις και ειδοποιήσεις. Τι να κάνω;',
    faqNotificationsAnswer: 'Ελέγξτε στις ρυθμίσεις συστήματος της συσκευής ότι οι ειδοποιήσεις επιτρέπονται για την εφαρμογή.',
    faqDeleteQuestion: 'Πώς διαγράφω τα δεδομένα μου;',
    faqDeleteAnswer: 'Η διαγραφή της εφαρμογής αφαιρεί όλα τα δεδομένα από τη συσκευή σας. Για δεδομένα ανάλυσης χρήσης που έχουν ήδη σταλεί, δείτε την πολιτική απορρήτου.',
    faqOfficialQuestion: 'Είναι επίσημη κυβερνητική εφαρμογή;',
    faqOfficialAnswer: 'Όχι. Ανεξάρτητος οδηγός. Δεν συνδέεται με την Κυβέρνηση της Κύπρου ή οποιαδήποτε δημόσια αρχή.',
    privacyPolicy: 'Πολιτική απορρήτου',
    download: 'Λήψη της εφαρμογής',
  },
};
