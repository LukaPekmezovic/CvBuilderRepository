import { EuiMarkdownFormat, EuiText } from '@elastic/eui';
import { FC } from 'react';

import { CvSection } from '../sections/CvSection';
import { SectionViewProps } from '../types';

export const Summary: FC<SectionViewProps> = ({
  title,
  person: { summary },
}) => (
  <CvSection title={title}>
    <EuiText size="s">
      <EuiMarkdownFormat textSize="s">{summary}</EuiMarkdownFormat>
    </EuiText>
  </CvSection>
);
