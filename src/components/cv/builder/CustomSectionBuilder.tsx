import {
  EuiFieldText,
  EuiFlexItem,
  EuiFormRow,
  EuiMarkdownEditor,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';
import { FC } from 'react';

import { SectionBuilderProps } from '../types';
import { ItemListBuilder } from './common/ItemListBuilder';

export const CustomSectionBuilder: FC<SectionBuilderProps> = ({
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
    items={person.custom}
    setItems={newItems => {
      setPerson({
        ...person,
        custom: newItems,
      });
    }}
    setFlyoutContent={setFlyoutContent}
    setFlyoutVisible={setFlyoutVisible}
    itemConstructor={() => ({
      title: 'Title',
      location: 'Location',
      description: 'Desc',
    })}
    itemComponentProps={(item, setItem) => ({
      title: 'Contact Information',
      panelContent: (
        <>
          <EuiTitle size="xxs">
            <h4>{item.title}</h4>
          </EuiTitle>
        </>
      ),
      children: (
        <>
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
          <EuiSpacer />
          <EuiFlexItem grow={1}>
            <EuiFormRow label="Location" fullWidth>
              <EuiFieldText
                compressed
                fullWidth
                value={item.location}
                onChange={e => {
                  setItem({
                    ...item,
                    location: e.target.value,
                  });
                }}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiSpacer />
          <EuiFlexItem>
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
          </EuiFlexItem>
        </>
      ),
    })}
  />
);
