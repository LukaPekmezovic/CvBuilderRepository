import { EuiText, EuiTextColor, EuiTitle } from '@elastic/eui';
import { FC } from 'react';

export interface HeaderProps {
  firstName: string;
  lastName: string;
  title: string;
}

export const Header: FC<HeaderProps> = ({ firstName, lastName, title }) => (
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
