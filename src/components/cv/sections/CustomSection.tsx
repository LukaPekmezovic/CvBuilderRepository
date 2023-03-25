import {
  EuiFlexGroup,
  EuiMarkdownFormat,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import { FC } from 'react';

import { SectionViewProps } from '..';
import { CvSection } from '..//sections/CvSection';

export const CustomSection: FC<SectionViewProps> = ({
  title,
  person: { custom: items },
}) => (
  <CvSection title={title}>
    {items.map(item => (
      <>
        <EuiFlexGroup>
          <EuiText size="m">{item.title}</EuiText>
          <EuiText size="s">{item.location}</EuiText>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiText size="s">
          <EuiMarkdownFormat>{item.description}</EuiMarkdownFormat>
        </EuiText>
      </>
    ))}
  </CvSection>
);
