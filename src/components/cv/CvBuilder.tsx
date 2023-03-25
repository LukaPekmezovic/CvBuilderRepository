import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiHorizontalRule,
  EuiTitle,
} from '@elastic/eui';
import 'lp-project-1/lib/gql/queries/getProfileFromGithub';
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

import { Person, SectionDefinition } from './types';

export interface CvBuilderProps {
  person: Person;
  setPerson: Dispatch<SetStateAction<Person>>;
  sections: SectionDefinition[];
  setSections: Dispatch<SetStateAction<SectionDefinition[]>>;
}

export interface FlyoutContent {
  title: ReactNode;
  children: ReactNode;
}

export const CvBuilder: FC<CvBuilderProps> = ({
  person,
  setPerson,
  sections,
  setSections,
}) => {
  const closeFlyout = useCallback(() => setFlyoutVisible(false), []);
  const [flyoutVisible, setFlyoutVisible] = useState(false);
  const [flyoutContent, setFlyoutContent] = useState<FlyoutContent>({
    title: '',
    children: '',
  });

  return (
    <>
      {sections.map(section => {
        const Builder = section.builderComponent;

        return (
          <>
            <Builder
              key={section.id}
              {...{
                section,
                setSection: newSection => {
                  const newSections = [...sections];
                  const index = newSections.findIndex(
                    s => s.id === newSection.id
                  );
                  newSections[index] = newSection;

                  setSections(newSections);
                },
                person,
                setPerson,
                setFlyoutVisible,
                setFlyoutContent,
              }}
            />
            <EuiHorizontalRule margin="xs" />
          </>
        );
      })}
      {flyoutVisible && (
        <EuiFlyout onClose={closeFlyout} side="left" size="s" ownFocus={false}>
          <EuiFlyoutHeader hasBorder>
            <EuiTitle>
              <h2>{flyoutContent.title}</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>{flyoutContent.children}</EuiFlyoutBody>
          <EuiFlyoutFooter>
            <EuiFlexGroup justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiButton onClick={closeFlyout} fill size="s">
                  Save
                </EuiButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton onClick={closeFlyout} color="text" size="s">
                  Close
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlyoutFooter>
        </EuiFlyout>
      )}
    </>
  );
};
