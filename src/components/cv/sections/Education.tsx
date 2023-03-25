import { EuiLink, EuiText, EuiTextColor } from '@elastic/eui';
import { FC } from 'react';

import { SectionViewProps } from '../';
import { CvSection } from '..//sections/CvSection';
import { formatDate } from './util';

export const Education: FC<SectionViewProps> = ({
  title,
  person: { education: items },
}) => (
  <CvSection title={title}>
    {items.map((item, i) => (
      <EuiText size="s" key={i}>
        <EuiLink href={item.institution.href} target="_blank">
          {item.institution.label}
        </EuiLink>
        <p>
          <EuiTextColor color="subdued">{item.description}</EuiTextColor>
        </p>
        <p>
          ({formatDate(item.dateRange.from)} - {formatDate(item.dateRange.to)})
        </p>
      </EuiText>
    ))}
  </CvSection>
);
