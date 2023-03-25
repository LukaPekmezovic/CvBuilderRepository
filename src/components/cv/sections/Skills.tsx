import { EuiMarkdownFormat, EuiTitle } from '@elastic/eui';
import { FC } from 'react';

import { SectionViewProps } from '..';
import { CvSection } from '../sections/CvSection';

export const Skills: FC<SectionViewProps> = ({
  title,
  person: { skills: items },
}) => (
  <CvSection title={title}>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <EuiTitle size="xxs">
            <h4>{item.title}</h4>
          </EuiTitle>
          {!!item.description && (
            <EuiMarkdownFormat textSize="s">
              {item.description}
            </EuiMarkdownFormat>
          )}
        </li>
      ))}
    </ul>
  </CvSection>
);
