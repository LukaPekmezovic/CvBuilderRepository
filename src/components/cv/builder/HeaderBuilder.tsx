import { EuiFieldText, EuiFormRow } from '@elastic/eui';
import { FC } from 'react';

import { SectionBuilderProps } from '../types';
import { BuilderSection } from './common/BuilderSection';

export const HeaderBuilder: FC<SectionBuilderProps> = ({
  section,
  setSection,
  person,
  setPerson,
}) => (
  <BuilderSection section={section} setSection={setSection}>
    <EuiFormRow label="First Name" fullWidth>
      <EuiFieldText
        fullWidth
        value={person.firstName}
        onChange={e => {
          setPerson({
            ...person,
            firstName: e.target.value,
          });
        }}
      />
    </EuiFormRow>
    <EuiFormRow label="Last Name" fullWidth>
      <EuiFieldText
        fullWidth
        value={person.lastName}
        onChange={e => {
          setPerson({
            ...person,
            lastName: e.target.value,
          });
        }}
      />
    </EuiFormRow>
    <EuiFormRow label="Title" fullWidth>
      <EuiFieldText
        fullWidth
        value={person.title}
        onChange={e => {
          setPerson({
            ...person,
            title: e.target.value,
          });
        }}
      />
    </EuiFormRow>
  </BuilderSection>
);
