import {
  EuiFieldText,
  EuiFlexItem,
  EuiFormRow,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';
import { FC } from 'react';

import { SectionBuilderProps } from '../types';
import { ItemListBuilder } from './common/ItemListBuilder';

export const ContactInformationBuilder: FC<SectionBuilderProps> = ({
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
    items={person.contactInformation}
    setItems={newItems => {
      setPerson({
        ...person,
        contactInformation: newItems,
      });
    }}
    setFlyoutContent={setFlyoutContent}
    setFlyoutVisible={setFlyoutVisible}
    itemConstructor={() => ({
      href: '#',
      label: 'Label',
    })}
    itemComponentProps={(item, setItem) => ({
      title: section.title,
      panelContent: (
        <EuiTitle size="xxs">
          <h4>{item.label}</h4>
        </EuiTitle>
      ),
      children: (
        <>
          <EuiFlexItem grow={1}>
            <EuiFormRow label="Name" fullWidth>
              <EuiFieldText
                compressed
                fullWidth
                value={item.label}
                onChange={e => {
                  setItem({
                    ...item,
                    label: e.target.value,
                  });
                }}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiSpacer />
          <EuiFlexItem grow={1}>
            <EuiFormRow label="URL" fullWidth>
              <EuiFieldText
                compressed
                fullWidth
                value={item.href}
                onChange={e => {
                  setItem({
                    ...item,
                    href: e.target.value,
                  });
                }}
              />
            </EuiFormRow>
          </EuiFlexItem>
        </>
      ),
    })}
  />
);
