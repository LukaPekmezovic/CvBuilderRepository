import { EuiLink, EuiText } from '@elastic/eui';
import { FC } from 'react';

import { OuterLink, SectionViewProps } from '..';
import { CvSection } from './CvSection';

export interface ContactInformationProps {
  items: OuterLink[];
}

export const ContactInformation: FC<SectionViewProps> = ({
  title,
  person: { contactInformation: items },
}) => (
  <CvSection title={title}>
    {items.map((item, i) => (
      <EuiText size="s" key={i}>
        <EuiText size="s">
          <EuiLink href={item.href}>
            <strong>{item.label}</strong>
          </EuiLink>
        </EuiText>
      </EuiText>
    ))}
  </CvSection>
);
