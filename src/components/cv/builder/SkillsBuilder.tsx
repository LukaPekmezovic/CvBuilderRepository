import {
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiMarkdownEditor,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';
import { FC } from 'react';

import { SectionBuilderProps } from '../types';
import { ItemListBuilder } from './common/ItemListBuilder';

export const SkillsBuilder: FC<SectionBuilderProps> = ({
  section,
  setSection,
  person,
  setPerson,
  setFlyoutContent,
  setFlyoutVisible,
}) => (
  <ItemListBuilder
    section={section}
    setSection={setSection}
    items={person.skills}
    setItems={newItems => {
      setPerson({
        ...person,
        skills: newItems,
      });
    }}
    setFlyoutContent={setFlyoutContent}
    setFlyoutVisible={setFlyoutVisible}
    itemConstructor={() => ({
      title: 'Skill name',
      description: '',
    })}
    itemComponentProps={(item, setItem) => ({
      title: 'Skills',
      panelContent: (
        <>
          <EuiTitle size="xxs">
            <h4>{item.title}</h4>
          </EuiTitle>
        </>
      ),
      children: (
        <>
          <EuiFlexGroup gutterSize="m">
            <EuiFlexItem grow={1}>
              <EuiFormRow label="Title" fullWidth>
                <EuiFieldText
                  compressed
                  fullWidth
                  value={item.title}
                  onChange={e => {
                    setItem({
                      ...item,
                      title: e.target.value,
                    });
                  }}
                />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiFlexGroup>
            <EuiFlexItem grow={1}>
              <EuiFormRow label="Description" fullWidth>
                <EuiMarkdownEditor
                  value={item.description}
                  onChange={value => {
                    setItem({
                      ...item,
                      description: value,
                    });
                  }}
                  aria-labelledby=""
                  readOnly={false}
                />
              </EuiFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      ),
    })}
  />
);
