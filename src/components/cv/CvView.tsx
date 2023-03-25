import { EuiFlexGroup, EuiFlexItem, EuiPanel } from '@elastic/eui';
import { FixMe } from 'lp-project-1/lib/types';
import { FC, MutableRefObject } from 'react';

import { Person, SectionDefinition, SeparatedSection } from './types';

export interface CvViewProps {
  person: Person;
  sections: SectionDefinition[];
  printRef?: MutableRefObject<FixMe>;
}

export const CvView: FC<CvViewProps> = ({ person, sections, printRef }) => {
  const separatedSections: SeparatedSection[] = [
    {
      grow: 4,
      sections: sections.filter(
        ({ viewPlacement, enabled }) => enabled && viewPlacement === 'left'
      ),
    },
    {
      grow: 1,
      sections: sections.filter(
        ({ viewPlacement, enabled }) => enabled && viewPlacement === 'right'
      ),
    },
  ];

  return (
    <EuiPanel
      hasShadow
      paddingSize="m"
      style={{
        minHeight: '1000px',
      }}>
      <div ref={printRef}>
        <EuiFlexGroup gutterSize="m">
          {separatedSections
            .filter(({ sections }) => !!sections.length)
            .map(({ grow, sections }, i) => (
              <EuiFlexItem grow={grow} key={i}>
                <EuiFlexGroup direction="column" gutterSize="m">
                  {sections.map(({ viewComponent: View, title }, j) => (
                    <EuiFlexItem grow={false} key={j}>
                      <View person={person} title={title} />
                    </EuiFlexItem>
                  ))}
                </EuiFlexGroup>
              </EuiFlexItem>
            ))}
        </EuiFlexGroup>
      </div>
    </EuiPanel>
  );
};
