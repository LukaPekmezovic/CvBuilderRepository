import {
  EuiButton,
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormLabel,
  EuiFormRow,
  EuiPanel,
  EuiTitle,
} from '@elastic/eui';
import { Dispatch, FC, SetStateAction } from 'react';

import { ContactInformation } from '../types';

export interface ContactInformationBuilderProps {
  items: ContactInformation;
  setItems: Dispatch<SetStateAction<ContactInformation>>;
}

export const ContactInformationBuilder: FC<ContactInformationBuilderProps> = ({
  items,
  setItems,
}) => (
  <EuiPanel>
    <EuiFlexGroup direction="column" gutterSize="m">
      <EuiFlexItem grow={false}>
        <EuiTitle size="xs">
          <h3>Contact Information</h3>
        </EuiTitle>
      </EuiFlexItem>
      {items.links.map((item, i) => (
        <EuiFlexItem key={i} grow={false}>
          <EuiFlexGroup gutterSize="m" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiFormLabel>{i + 1}</EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <EuiPanel hasBorder={false} hasShadow>
                <EuiFlexGroup gutterSize="m">
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Label" fullWidth>
                      <EuiFieldText
                        compressed
                        fullWidth
                        value={item.label}
                        onChange={e => {
                          const newLinks = [...items.links];
                          newLinks[i] = {
                            ...item,
                            label: e.target.value,
                            href: item.href,
                          };
                          const newItems: ContactInformation = {
                            ...items,
                            links: newLinks,
                          };
                          setItems(newItems);
                        }}
                      />
                    </EuiFormRow>
                  </EuiFlexItem>
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Link" fullWidth>
                      <EuiFieldText
                        compressed
                        fullWidth
                        value={item.href}
                        onChange={e => {
                          const newLinks = [...items.links];
                          newLinks[i] = {
                            ...item,
                            label: item.label, // Add this line to retain the existing label
                            href: e.target.value,
                          };
                          const newItems: ContactInformation = {
                            ...items,
                            links: newLinks,
                          };
                          setItems(newItems);
                        }}
                      />
                    </EuiFormRow>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButtonIcon
                iconType="trash"
                color="danger"
                size="s"
                onClick={() => {
                  const newLinks = [...items.links];
                  newLinks.splice(i, 1);
                  const newItems: ContactInformation = {
                    ...items,
                    links: newLinks,
                  };
                  setItems(newItems);
                }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      ))}
      <EuiFlexItem grow={false}>
        <EuiButton
          iconType="plus"
          fullWidth
          size="s"
          onClick={() => {
            const newLinks = [...items.links];
            newLinks.push({
              label: '',
              href: '',
            });
            const newItems: ContactInformation = {
              ...items,
              links: newLinks,
            };
            setItems(newItems);
          }}>
          + Add New Item
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiPanel>
);
