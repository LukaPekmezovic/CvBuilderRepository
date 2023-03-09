import { FC } from 'react';

import { SkillItem } from '..';
import { CvSection } from '../sections/CvSection';

export interface SkillsProps {
  items: SkillItem[];
}

export const Skills: FC<SkillsProps> = ({ items }) => (
  <CvSection title="Skills & Experience">
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.title}</strong> ({item.description})
        </li>
      ))}
    </ul>
  </CvSection>
);
