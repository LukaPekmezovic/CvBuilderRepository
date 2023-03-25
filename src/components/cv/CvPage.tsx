import {
  EuiButtonSize,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageTemplate,
  EuiSpacer,
  htmlIdGenerator,
} from '@elastic/eui';
import { CvView, SectionDefinition } from 'lp-project-1/components/cv';
import { CvBuilder } from 'lp-project-1/components/cv/CvBuilder';
import { ContactInformationBuilder } from 'lp-project-1/components/cv/builder/ContactInformationBuilder';
import { CustomSectionBuilder } from 'lp-project-1/components/cv/builder/CustomSectionBuilder';
import { EducationBuilder } from 'lp-project-1/components/cv/builder/EducationBuilder';
import { HeaderBuilder } from 'lp-project-1/components/cv/builder/HeaderBuilder';
import { SkillsBuilder } from 'lp-project-1/components/cv/builder/SkillsBuilder';
import { SummaryBuilder } from 'lp-project-1/components/cv/builder/SummaryBuilder';
import { WorkExperienceBuilder } from 'lp-project-1/components/cv/builder/WorkExperienceBuilder';
// import { BuilderButtons } from 'lp-project-1/components/cv/builder/common/BuilderButtons';
import { GithubImport } from 'lp-project-1/components/cv/github/GithubImport';
import { PrintButton } from 'lp-project-1/components/cv/print/PrintButton';
import { ContactInformation } from 'lp-project-1/components/cv/sections/ContactInformation';
import { CustomSection } from 'lp-project-1/components/cv/sections/CustomSection';
import { Education } from 'lp-project-1/components/cv/sections/Education';
import { Header } from 'lp-project-1/components/cv/sections/Header';
import { Skills } from 'lp-project-1/components/cv/sections/Skills';
import { Summary } from 'lp-project-1/components/cv/sections/Summary';
import { WorkExperience } from 'lp-project-1/components/cv/sections/WorkExperience';
import { person as defaultPerson } from 'lp-project-1/lib/data/cv/person';
import { FC } from 'react';
import { useRef, useState } from 'react';

export const CvPage: FC = () => {
  const uuid = htmlIdGenerator();

  const defaultSections: SectionDefinition[] = [
    {
      id: uuid(),
      viewPlacement: 'left',
      title: 'Header',
      viewComponent: Header,
      builderComponent: HeaderBuilder,
      icon: 'gear',
      enabled: true,
    },
    {
      id: uuid(),
      viewPlacement: 'left',
      title: 'Summary',
      viewComponent: Summary,
      builderComponent: SummaryBuilder,
      icon: 'gear',
      enabled: true,
    },
    {
      id: uuid(),
      viewPlacement: 'left',
      title: 'Work Experience',
      viewComponent: WorkExperience,
      builderComponent: WorkExperienceBuilder,
      icon: 'iInCircle',
      enabled: false,
    },
    {
      id: uuid(),
      viewPlacement: 'left',
      title: 'Custom',
      viewComponent: CustomSection,
      builderComponent: CustomSectionBuilder,
      icon: 'glasses',
      enabled: false,
    },
    {
      id: uuid(),
      viewPlacement: 'right',
      title: 'Contact Information',
      viewComponent: ContactInformation,
      builderComponent: ContactInformationBuilder,
      icon: 'brush',
      enabled: false,
    },
    {
      id: uuid(),
      viewPlacement: 'right',
      title: 'Education',
      viewComponent: Education,
      builderComponent: EducationBuilder,
      icon: 'lettering',
      enabled: false,
    },
    {
      id: uuid(),
      viewPlacement: 'right',
      title: 'Skills',
      viewComponent: Skills,
      builderComponent: SkillsBuilder,
      icon: 'plusInCircle',
      enabled: false,
    },
  ];

  const [sections, setSections] =
    useState<SectionDefinition[]>(defaultSections);
  const [person, setPerson] = useState(defaultPerson);
  const printRef = useRef();
  const buttonSize: EuiButtonSize = 'm';

  return (
    <EuiPageTemplate restrictWidth={false}>
      <EuiPageTemplate.Header
        pageTitle="CV Builder"
        rightSideItems={[
          <PrintButton
            key={1}
            buttonSize={buttonSize}
            person={person}
            sections={sections}
            printRef={printRef}
          />,
          <GithubImport
            key={0}
            buttonSize={buttonSize}
            person={person}
            setPerson={setPerson}
          />,
        ]}
      />
      <EuiPageTemplate.Section grow={false}>
        {/* <BuilderButtons
          buttonSize={buttonSize}
          sections={sections}
          setSections={setSections}
        />
        <EuiSpacer size="l" /> */}
        <EuiFlexGroup gutterSize="l" responsive={false}>
          <EuiFlexItem grow={1}>
            <CvBuilder
              person={person}
              setPerson={setPerson}
              sections={sections}
              setSections={setSections}
            />
            <EuiSpacer />
          </EuiFlexItem>
          <EuiFlexItem grow={3}>
            <CvView person={person} sections={sections} printRef={printRef} />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageTemplate.Section>
    </EuiPageTemplate>
  );
};
