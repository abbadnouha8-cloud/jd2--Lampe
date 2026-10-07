export interface LocalizedString {
  fr: string;
  en: string;
}

export interface ThemeTrack {
  id: string;
  badge: string;
  title: LocalizedString;
  description: LocalizedString;
  subtopics: LocalizedString[];
  color?: string;
}

export interface CommitteeMember {
  name: string;
  role: LocalizedString;
  affiliation?: LocalizedString;
  institution?: string;
  photoUrl?: string;
}

export interface CommitteeGroup {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  members: CommitteeMember[];
}

export interface RegistrationTier {
  id: string;
  badge: LocalizedString;
  title: LocalizedString;
  price: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  recommended?: boolean;
}

export interface PracticalInfoItem {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  highlight?: LocalizedString;
}

export interface AgendaItem {
  time: string;
  title: LocalizedString;
  description: LocalizedString;
  category?: 'ceremony' | 'session' | 'poster' | 'break' | 'roundtable' | 'closing';
  location?: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface SubmissionStep {
  step: string;
  title: LocalizedString;
  date: LocalizedString;
  description: LocalizedString;
}

export interface KeynoteSpeaker {
  id: string;
  name: string;
  title: LocalizedString;
  institution: LocalizedString;
  location: LocalizedString;
  photoUrl: string;
  scholarUrl: string;
  citations: string;
  hIndex: string;
  i10Index: string;
  topicTitle: LocalizedString;
  bio: LocalizedString;
  expertise: LocalizedString[];
  featuredBadge?: LocalizedString;
}
