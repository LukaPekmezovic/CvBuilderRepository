import { EuiMarkdownFormat, EuiText } from '@elastic/eui';
import { FC } from 'react';

import { CvSection } from '../sections/CvSection';

export interface SummaryProps {
  summary: string;
}

export const Summary: FC<SummaryProps> = ({ summary }) => (
  <CvSection title="Summary">
    <EuiText size="s">
      <EuiMarkdownFormat>{summary}</EuiMarkdownFormat>
    </EuiText>
  </CvSection>
);
