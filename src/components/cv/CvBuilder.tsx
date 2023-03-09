import {
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiHorizontalRule,
  EuiMarkdownEditor,
} from '@elastic/eui';
import { Dispatch, FC, SetStateAction } from 'react';

import { ContactInformationBuilder } from './builder/ContactInformationBuilder';
import { WorkExperienceBuilder } from './builder/WorkExperienceBuilder';
import { Person } from './types';

export interface CvBuilderProps {
  person: Person;
  setPerson: Dispatch<SetStateAction<Person>>;
}

export const CvBuilder: FC<CvBuilderProps> = ({ person, setPerson }) => (
  <EuiForm component="form">
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
    <EuiHorizontalRule />
    <WorkExperienceBuilder
      items={person.workExperience}
      setItems={newItems => {
        setPerson({
          ...person,
          workExperience:
            typeof newItems === 'function'
              ? newItems(person.workExperience)
              : newItems,
        });
      }}
    />
    <EuiHorizontalRule />
    <ContactInformationBuilder
      items={person.contactInformation}
      setItems={newItems => {
        setPerson({
          ...person,
          contactInformation:
            typeof newItems === 'function'
              ? newItems(person.contactInformation)
              : newItems,
        });
      }}
    />
  </EuiForm>
);
