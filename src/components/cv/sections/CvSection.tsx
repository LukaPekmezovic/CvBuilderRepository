import { EuiPanel, EuiSpacer, EuiTitle } from '@elastic/eui';
import { FC, ReactNode } from 'react';

export interface CvSectionProps {
  title: ReactNode;
  children: ReactNode | ReactNode[];
}

export const CvSection: FC<CvSectionProps> = ({ title, children }) => (
  <>
    <EuiTitle size="xs">
      <h3
        style={{
          textTransform: 'uppercase',
        }}>
        {title}
      </h3>
    </EuiTitle>
    <EuiSpacer size="s" />
    <EuiPanel paddingSize="m" hasShadow={false} hasBorder>
      {children}
    </EuiPanel>
  </>
);
