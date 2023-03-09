import { EuiLink } from '@elastic/eui';
import { FC } from 'react';

import { ContactInformation as CI } from '..';
import { CvSection } from './CvSection';

export interface ContactInformationProps {
  contactInformation: CI;
}

export const ContactInformation: FC<ContactInformationProps> = ({
  contactInformation: { links },
}) => (
  <CvSection title="Contact Information">
    {links.map((link, index) => (
      <EuiLink
        key={index}
        href={link.href}
        target="_blank"
        style={{ marginBottom: 0 }}>
        {link.label}
      </EuiLink>
    ))}
  </CvSection>
);
