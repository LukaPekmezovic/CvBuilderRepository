import { EuiFlexGroup, EuiFlexItem, EuiPanel } from '@elastic/eui';
import { FC } from 'react';

import { Person, SectionLayout, SeparatedSection } from './types';

export interface CvViewProps {
  person: Person;
  sections: SectionLayout[];
}

export const CvView: FC<CvViewProps> = ({ person, sections }) => {
  const separatedSections: SeparatedSection[] = [
    {
      grow: 4,
      sections: sections.filter(({ placement }) => placement === 'left'),
    },
    {
      grow: 1,
      sections: sections.filter(({ placement }) => placement === 'right'),
    },
  ];

  return (
    <EuiPanel hasShadow paddingSize="m">
      <EuiFlexGroup gutterSize="m">
        {separatedSections.map(({ grow, sections }, i) => (
          <EuiFlexItem grow={grow} key={i}>
            <EuiFlexGroup direction="column" gutterSize="m">
              {sections.map(({ render }, j) => (
                <EuiFlexItem grow={false} key={j}>
                  {render(person)}
                </EuiFlexItem>
              ))}
            </EuiFlexGroup>
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
    </EuiPanel>
  );
};
