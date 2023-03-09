import { EuiLink, EuiTextColor } from '@elastic/eui';
import { FC } from 'react';

import { EducationItem } from '../';
import { CvSection } from '..//sections/CvSection';
import { formatDate } from './util';

export interface EducationProps {
  items: EducationItem[];
}

export const Education: FC<EducationProps> = ({ items }) => (
  <CvSection title="Education">
    {items.map(item => (
      <>
        <EuiLink href={item.institution.href} target="_blank">
          {item.institution.label}
        </EuiLink>
        <p>
          <EuiTextColor color="subdued">{item.description}</EuiTextColor>
        </p>
        <p>
          ({formatDate(item.dateRange.from)} - {formatDate(item.dateRange.to)})
        </p>
      </>
    ))}
  </CvSection>
);
