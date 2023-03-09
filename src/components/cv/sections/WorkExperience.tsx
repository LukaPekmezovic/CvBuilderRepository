import { EuiLink, EuiSpacer, EuiText } from '@elastic/eui';
import { FC } from 'react';

import { WorkExperienceItem } from '..';
import { CvSection } from '../sections/CvSection';
import { formatDate } from './util';

export interface WorkExperienceProps {
  items: WorkExperienceItem[];
}

export const WorkExperience: FC<WorkExperienceProps> = ({ items }) => (
  <CvSection title="Work Experience">
    {items.map(item => (
      <>
        <EuiText size="s">
          <EuiText size="s">
            <EuiLink href={item.company.href}>
              <strong>{item.company.label}</strong>
            </EuiLink>{' '}
            <p>{`${item.location} ${item.title} (${formatDate(
              item.dateRange.from
            )} - ${formatDate(item.dateRange.to)})`}</p>
          </EuiText>
        </EuiText>
        <EuiSpacer />
        <EuiText size="s">
          <p>{item.description}</p>
        </EuiText>
        <EuiSpacer />
        <EuiText size="s">
          <p>
            <strong>{item.skills.map(skill => skill.title).join(', ')}</strong>
          </p>
        </EuiText>
      </>
    ))}
  </CvSection>
);
