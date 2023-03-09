import { EuiFlexItemProps } from '@elastic/eui';
import { ReactNode } from 'react';

export interface OuterLink {
  label: string;
  href: string;
}

export interface ContactInformation {
  links: OuterLink[];
}

export interface CvDateRange {
  from: Date;
  to?: Date;
}

export interface EducationItem {
  dateRange: CvDateRange;
  institution: OuterLink;
  description: string;
}

export interface SkillItem {
  title: string;
  description: string;
}

export interface WorkExperienceItem {
  company: OuterLink;
  location: string;
  title: string;
  dateRange: CvDateRange;
  description: string;
  skills: SkillItem[];
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  summary: string;
  // TODO: Luka - napraviti
  contactInformation: ContactInformation;
  // TODO: Luka - napraviti
  education: EducationItem[];
  // TODO: Luka - napraviti
  skills: SkillItem[];
  // TODO: Luka - zavrsiti
  workExperience: WorkExperienceItem[];
}

export interface SectionLayout {
  placement: 'left' | 'right';
  render: (person: Person) => ReactNode;
}

export interface SeparatedSection {
  grow: EuiFlexItemProps['grow'];
  sections: SectionLayout[];
}
