import { EuiText, EuiTextColor, EuiTitle } from '@elastic/eui';
import { FC } from 'react';

import { SectionViewProps } from '../types';

export const Header: FC<SectionViewProps> = ({
  person: { firstName, lastName, title },
}) => (
  <>
    <EuiTitle size="m">
      <h1>{`${firstName} ${lastName}`}</h1>
    </EuiTitle>
    <EuiText>
      <EuiTextColor color="subdued">
        <p>{title}</p>
      </EuiTextColor>
    </EuiText>
  </>
);
