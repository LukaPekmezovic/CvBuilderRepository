import { EuiFlexItemProps, IconType } from '@elastic/eui';
import { Dispatch, FC, SetStateAction } from 'react';

import { FlyoutContent } from './CvBuilder';

export interface OuterLink {
  label: string;
  href: string;
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
  description?: string;
}

export interface WorkExperienceItem {
  company: OuterLink;
  location: string;
  title: string;
  dateRange: CvDateRange;
  description: string;
  skills: SkillItem[];
}

export interface CustomSectionItem {
  title: string;
  location: string;
  description: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  summary: string;
  contactInformation: OuterLink[];
  education: EducationItem[];
  skills: SkillItem[];
  workExperience: WorkExperienceItem[];
  custom: CustomSectionItem[];
}

export interface SectionViewProps {
  title: string;
  person: Person;
}

export interface SectionBuilderProps {
  section: SectionDefinition;
  setSection: (newSection: SectionDefinition) => void;
  person: Person;
  setPerson: Dispatch<SetStateAction<Person>>;
  setFlyoutVisible: (value: boolean) => void;
  setFlyoutContent: (content: FlyoutContent) => void;
}

export interface SectionDefinition {
  id: string;
  title: string;
  viewPlacement: 'left' | 'right';
  viewComponent: FC<SectionViewProps>;
  builderComponent: FC<SectionBuilderProps>;
  icon: IconType;
  enabled: boolean;
}

export interface SeparatedSection {
  grow: EuiFlexItemProps['grow'];
  sections: SectionDefinition[];
}
