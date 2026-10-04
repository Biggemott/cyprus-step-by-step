export const languages = ['en', 'ru', 'el'] as const;

export type Language = (typeof languages)[number];

export const translations: Record<Language, {
  description: string;
  googlePlay: string;
  appStore: string;
}> = {
  en: {
    description: 'Practical guides, tailored checklists, important dates and reminders for life in Cyprus, with direct links to official sources.',
    googlePlay: 'Google Play',
    appStore: 'App Store',
  },
  ru: {
    description: 'Практические инструкции, чек-листы под вашу ситуацию, важные даты и напоминания для жизни на Кипре — со ссылками на официальные источники.',
    googlePlay: 'Google Play',
    appStore: 'App Store',
  },
  el: {
    description: 'Πρακτικοί οδηγοί, προσαρμοσμένες λίστες ελέγχου, σημαντικές ημερομηνίες και υπενθυμίσεις για τη ζωή στην Κύπρο, με άμεσους συνδέσμους προς επίσημες πηγές.',
    googlePlay: 'Google Play',
    appStore: 'App Store',
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
  faqSourcesQuestion: string;
  faqSourcesAnswer: string;
  faqOfficialQuestion: string;
  faqOfficialAnswer: string;
  privacyPolicy: string;
  download: string;
}> = {
  en: {
    support: 'Support',
    intro: 'Practical guides, tailored checklists, important dates and reminders for life in Cyprus.',
    contactTitle: 'Contact us',
    contactText: 'Questions, feedback or a problem with the app? Email us:',
    contactNote: 'You can also send feedback from the Home screen or report an issue with a specific step or Key Date from inside the app.',
    faqTitle: 'Frequently asked questions',
    faqDataQuestion: 'Where is my data stored?',
    faqDataAnswer: 'Your checklist progress, questionnaire answers and reminder settings are stored on your device. No account is required. Optional usage analytics is off by default.',
    faqAnalyticsQuestion: 'How do I turn analytics on or off?',
    faqAnalyticsAnswer: 'Use the Usage analytics toggle at the bottom of the Home screen. Analytics is off by default and starts only if you choose to enable it.',
    faqNotificationsQuestion: 'Reminders and notifications are not arriving. What can I do?',
    faqNotificationsAnswer: 'Make sure notifications are allowed for Cyprus Step-by-Step in your device settings and that the reminder you want is enabled in the app.',
    faqDeleteQuestion: 'How do I delete my data?',
    faqDeleteAnswer: 'You can reset an individual task in the app to remove its progress and reminders. To remove all locally stored app data, uninstall the app. For analytics data already sent and possible device backups, see the Privacy Policy.',
    faqSourcesQuestion: 'Where does the information come from?',
    faqSourcesAnswer: 'The app summarizes publicly available information from official authorities and services. Guides and administrative Key Dates include direct links to official sources where available. Requirements may change, so always verify important details with the linked official sources.',
    faqOfficialQuestion: 'Is this an official government app?',
    faqOfficialAnswer: 'No. Cyprus Step-by-Step is an independent informational app. It does not represent, and is not affiliated with or endorsed by, the Government of the Republic of Cyprus or any other public authority.',
    privacyPolicy: 'Privacy policy',
    download: 'Download the app',
  },
  ru: {
    support: 'Поддержка',
    intro: 'Практические инструкции, чек-листы под вашу ситуацию, важные даты и напоминания для жизни на Кипре.',
    contactTitle: 'Связаться с нами',
    contactText: 'Вопросы, отзывы или проблема с приложением? Напишите нам:',
    contactNote: 'Также можно отправить отзыв с главного экрана или сообщить о проблеме с конкретным шагом или важной датой прямо из приложения.',
    faqTitle: 'Частые вопросы',
    faqDataQuestion: 'Где хранятся мои данные?',
    faqDataAnswer: 'Прогресс в чек-листах, ответы на вопросы и настройки напоминаний хранятся на вашем устройстве. Аккаунт не нужен. Необязательная аналитика использования по умолчанию выключена.',
    faqAnalyticsQuestion: 'Как включить или выключить аналитику?',
    faqAnalyticsAnswer: 'Используйте переключатель «Аналитика использования» внизу главного экрана. По умолчанию аналитика выключена и включается только по вашему выбору.',
    faqNotificationsQuestion: 'Не приходят напоминания и уведомления. Что делать?',
    faqNotificationsAnswer: 'Убедитесь, что уведомления для Cyprus Step-by-Step разрешены в системных настройках и нужное напоминание включено в приложении.',
    faqDeleteQuestion: 'Как удалить мои данные?',
    faqDeleteAnswer: 'Можно сбросить отдельную задачу в приложении, чтобы удалить её прогресс и напоминания. Чтобы удалить все локальные данные приложения, удалите приложение. Информация об уже отправленных данных аналитики и возможных резервных копиях — в Политике конфиденциальности.',
    faqSourcesQuestion: 'Откуда берётся информация?',
    faqSourcesAnswer: 'Приложение кратко излагает общедоступную информацию официальных органов и служб. В инструкциях и административных важных датах есть прямые ссылки на официальные источники, если они доступны. Требования могут меняться, поэтому всегда проверяйте важные детали по указанным официальным источникам.',
    faqOfficialQuestion: 'Это официальное государственное приложение?',
    faqOfficialAnswer: 'Нет. Cyprus Step-by-Step — независимое информационное приложение. Оно не представляет Правительство Республики Кипр или другие государственные органы, не связано с ними и не одобрено ими.',
    privacyPolicy: 'Политика конфиденциальности',
    download: 'Скачать приложение',
  },
  el: {
    support: 'Υποστήριξη',
    intro: 'Πρακτικοί οδηγοί, προσαρμοσμένες λίστες ελέγχου, σημαντικές ημερομηνίες και υπενθυμίσεις για τη ζωή στην Κύπρο.',
    contactTitle: 'Επικοινωνία',
    contactText: 'Ερωτήσεις, σχόλια ή πρόβλημα με την εφαρμογή; Γράψτε μας:',
    contactNote: 'Μπορείτε επίσης να στείλετε σχόλια από την αρχική οθόνη ή να αναφέρετε πρόβλημα με συγκεκριμένο βήμα ή σημαντική ημερομηνία μέσα από την εφαρμογή.',
    faqTitle: 'Συχνές ερωτήσεις',
    faqDataQuestion: 'Πού αποθηκεύονται τα δεδομένα μου;',
    faqDataAnswer: 'Η πρόοδος στις λίστες ελέγχου, οι απαντήσεις σας και οι ρυθμίσεις υπενθυμίσεων αποθηκεύονται στη συσκευή σας. Δεν απαιτείται λογαριασμός. Η προαιρετική ανάλυση χρήσης είναι απενεργοποιημένη από προεπιλογή.',
    faqAnalyticsQuestion: 'Πώς ενεργοποιώ ή απενεργοποιώ την ανάλυση χρήσης;',
    faqAnalyticsAnswer: 'Χρησιμοποιήστε τον διακόπτη «Ανάλυση χρήσης» στο κάτω μέρος της αρχικής οθόνης. Η ανάλυση είναι απενεργοποιημένη από προεπιλογή και ενεργοποιείται μόνο αν το επιλέξετε.',
    faqNotificationsQuestion: 'Δεν λαμβάνω υπενθυμίσεις και ειδοποιήσεις. Τι να κάνω;',
    faqNotificationsAnswer: 'Βεβαιωθείτε ότι οι ειδοποιήσεις για το Cyprus Step-by-Step επιτρέπονται στις ρυθμίσεις της συσκευής σας και ότι η συγκεκριμένη υπενθύμιση είναι ενεργοποιημένη στην εφαρμογή.',
    faqDeleteQuestion: 'Πώς διαγράφω τα δεδομένα μου;',
    faqDeleteAnswer: 'Μπορείτε να επαναφέρετε μια μεμονωμένη εργασία μέσα στην εφαρμογή για να διαγράψετε την πρόοδο και τις υπενθυμίσεις της. Για να αφαιρέσετε όλα τα δεδομένα που είναι αποθηκευμένα τοπικά, διαγράψτε την εφαρμογή. Για δεδομένα ανάλυσης που έχουν ήδη σταλεί και για πιθανά αντίγραφα ασφαλείας της συσκευής, δείτε την Πολιτική απορρήτου.',
    faqSourcesQuestion: 'Από πού προέρχονται οι πληροφορίες;',
    faqSourcesAnswer: 'Η εφαρμογή συνοψίζει δημόσια διαθέσιμες πληροφορίες από επίσημες αρχές και υπηρεσίες. Οι οδηγοί και οι διοικητικές σημαντικές ημερομηνίες περιλαμβάνουν άμεσους συνδέσμους προς επίσημες πηγές, όπου υπάρχουν. Οι απαιτήσεις μπορεί να αλλάξουν, γι’ αυτό επαληθεύετε πάντα τις σημαντικές λεπτομέρειες στις συνδεδεμένες επίσημες πηγές.',
    faqOfficialQuestion: 'Είναι επίσημη κυβερνητική εφαρμογή;',
    faqOfficialAnswer: 'Όχι. Το Cyprus Step-by-Step είναι μια ανεξάρτητη ενημερωτική εφαρμογή. Δεν εκπροσωπεί την Κυβέρνηση της Κυπριακής Δημοκρατίας ή οποιαδήποτε άλλη δημόσια αρχή και δεν συνδέεται ούτε έχει εγκριθεί από αυτές.',
    privacyPolicy: 'Πολιτική απορρήτου',
    download: 'Λήψη της εφαρμογής',
  },
};
