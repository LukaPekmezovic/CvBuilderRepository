import { EuiFormRow, EuiMarkdownEditor } from '@elastic/eui';
import { FC } from 'react';

import { SectionBuilderProps } from '../types';
import { BuilderSection } from './common/BuilderSection';

export const SummaryBuilder: FC<SectionBuilderProps> = ({
  section,
  setSection,
  person,
  setPerson,
}) => (
  <BuilderSection section={section} setSection={setSection}>
    <EuiFormRow label="Summary" fullWidth>
      <EuiMarkdownEditor
        value={person.summary}
        onChange={value => {
          setPerson({
            ...person,
            summary: value,
          });
        }}
        aria-labelledby=""
        readOnly={false}
      />
    </EuiFormRow>
  </BuilderSection>
);
