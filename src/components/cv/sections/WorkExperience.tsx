import { EuiLink, EuiMarkdownFormat, EuiSpacer, EuiText } from '@elastic/eui';
import { FC } from 'react';

import { SectionViewProps } from '..';
import { CvSection } from '../sections/CvSection';
import { formatDate } from './util';

export const WorkExperience: FC<SectionViewProps> = ({
  title,
  person: { workExperience: items },
}) => (
  <CvSection title={title}>
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
          <EuiMarkdownFormat textSize="s">{item.description}</EuiMarkdownFormat>
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
