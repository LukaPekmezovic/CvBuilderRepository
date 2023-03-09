import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import Page from 'lp-project-1/components/Page';
import { CvView, SectionLayout } from 'lp-project-1/components/cv';
import { CvBuilder } from 'lp-project-1/components/cv/CvBuilder';
import { ContactInformation } from 'lp-project-1/components/cv/sections/ContactInformation';
import { Education } from 'lp-project-1/components/cv/sections/Education';
import { Header } from 'lp-project-1/components/cv/sections/Header';
import { Skills } from 'lp-project-1/components/cv/sections/Skills';
import { Summary } from 'lp-project-1/components/cv/sections/Summary';
import { WorkExperience } from 'lp-project-1/components/cv/sections/WorkExperience';
import { person as defaultPerson } from 'lp-project-1/lib/data/cv/person';
import { useState } from 'react';

export const DefaultTemplate = () => {
  const [person, setPerson] = useState(defaultPerson);

  const sections: SectionLayout[] = [
    {
      placement: 'left',
      render: ({ firstName, lastName, title }) => (
        <Header
          {...{
            firstName,
            lastName,
            title,
          }}
        />
      ),
    },
    {
      placement: 'left',
      render: ({ summary }) => <Summary summary={summary} />,
    },
    {
      placement: 'left',
      render: ({ workExperience }) => <WorkExperience items={workExperience} />,
    },
    {
      placement: 'right',
      render: ({ contactInformation }) => (
        <ContactInformation contactInformation={contactInformation} />
      ),
    },
    {
      placement: 'right',
      render: ({ education }) => <Education items={education} />,
    },
    {
      placement: 'right',
      render: ({ skills }) => <Skills items={skills} />,
    },
  ];

  return (
    <Page title="CV Builder" restrictWidth={false}>
      <EuiFlexGroup>
        <EuiFlexItem grow={1}>
          <CvBuilder person={person} setPerson={setPerson} />
        </EuiFlexItem>
        <EuiFlexItem grow={2}>
          <CvView person={person} sections={sections} />
        </EuiFlexItem>
      </EuiFlexGroup>
    </Page>
  );
};

export default DefaultTemplate;
