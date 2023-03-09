import {
  EuiButton,
  EuiButtonIcon,
  EuiDatePicker,
  EuiDatePickerRange,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormLabel,
  EuiFormRow,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';
import moment from 'moment';
import { Dispatch, FC, SetStateAction } from 'react';

import { WorkExperienceItem } from '../types';

/*
Work Experience Items:
- Lista nekih panela, gde svaki panel ima:
  - company: 2 text field-a, jedan do drugog, levi je label, desni je href
  - location: 1 text field
  - title: 1 text field
  - date: 1 date range field
  - description: 1 textarea field
  - skills: Lista panela koji u sebi imaju polja:
    - title: 1 text field
    - description: 1 textarea field

Pored toga, svaki "item" u listi, sa desne strane ima "Delete" dugme koje brise
sam taj item iz liste
A jos pored toga, na dnu liste postoji dugme "Add" koje dodaje novi prazan item
u listu, koji se kasnije moze popuniti
 */

export interface WorkExperienceBuilderProps {
  items: WorkExperienceItem[];
  setItems: Dispatch<SetStateAction<WorkExperienceItem[]>>;
}

export const WorkExperienceBuilder: FC<WorkExperienceBuilderProps> = ({
  items,
  setItems,
}) => (
  <EuiPanel hasBorder hasShadow={false}>
    <EuiFlexGroup direction="column" gutterSize="m">
      <EuiFlexItem grow={false}>
        <EuiTitle size="xs">
          <h3>Work Experience</h3>
        </EuiTitle>
      </EuiFlexItem>
      {items.map((item, i) => (
        <EuiFlexItem key={i} grow={false}>
          <EuiFlexGroup gutterSize="m" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiFormLabel>{i + 1}</EuiFormLabel>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <EuiPanel hasBorder={false} hasShadow>
                <EuiFlexGroup gutterSize="m">
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Company Name" fullWidth>
                      <EuiFieldText
                        compressed
                        fullWidth
                        value={item.company.label}
                        onChange={e => {
                          const newItems = [...items];
                          newItems[i] = {
                            ...item,
                            company: {
                              ...item.company,
                              label: e.target.value,
                            },
                          };

                          setItems(newItems);
                        }}
                      />
                    </EuiFormRow>
                  </EuiFlexItem>
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Company Website URL" fullWidth>
                      <EuiFieldText
                        compressed
                        fullWidth
                        value={item.company.href}
                        onChange={e => {
                          const newItems = [...items];

                          newItems[i] = {
                            ...item,
                            company: {
                              ...item.company,
                              href: e.target.value,
                            },
                          };

                          setItems(newItems);
                        }}
                      />
                    </EuiFormRow>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer />
                <EuiFlexGroup>
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Location" fullWidth>
                      <EuiFieldText
                        compressed
                        fullWidth
                        value={item.location}
                        onChange={e => {
                          const newItems = [...items];
                          newItems[i] = { ...item, location: e.target.value };
                          setItems(newItems);
                        }}
                      />
                    </EuiFormRow>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer />
                <EuiFlexGroup>
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Title" fullWidth>
                      <EuiFieldText
                        compressed
                        fullWidth
                        value={item.title}
                        onChange={e => {
                          const newItems = [...items];
                          newItems[i] = { ...item, title: e.target.value };
                          setItems(newItems);
                        }}
                      />
                    </EuiFormRow>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer />
                <EuiFlexGroup>
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Period" fullWidth>
                      <EuiDatePickerRange
                        fullWidth
                        startDateControl={
                          <EuiDatePicker
                            dateFormat="LL"
                            selected={moment(item.dateRange.from)}
                            onChange={date => {
                              const newItems = [...items];
                              newItems[i] = {
                                ...item,
                                dateRange: {
                                  ...item.dateRange,
                                  from: date.toDate(),
                                },
                              };
                              setItems(newItems);
                            }}
                            aria-label="Start date"
                          />
                        }
                        endDateControl={
                          <EuiDatePicker
                            dateFormat="LL"
                            selected={moment(item.dateRange.to)}
                            onChange={date => {
                              const newItems = [...items];
                              newItems[i] = {
                                ...item,
                                dateRange: {
                                  ...item.dateRange,
                                  to: date.toDate(),
                                },
                              };
                              setItems(newItems);
                            }}
                            aria-label="End date"
                          />
                        }
                      />
                    </EuiFormRow>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer />
                <EuiFlexGroup>
                  <EuiFlexItem grow={1}>
                    <EuiFormRow label="Description" fullWidth>
                      <EuiFieldText
                        compressed
                        fullWidth
                        value={item.description}
                        onChange={e => {
                          const newItems = [...items];
                          newItems[i] = {
                            ...item,
                            description: e.target.value,
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
                  const newItems = [...items];
                  delete newItems[i];
                  setItems(newItems.filter(item => !!item));
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
            const now = new Date();
            const newItems = [...items];
            newItems.push({
              company: {
                href: '#',
                label: 'New company',
              },
              dateRange: {
                from: now,
                to: now,
              },
              title: '',
              description: '',
              location: '',
              skills: [],
            });
            setItems(newItems);
          }}>
          Add new item
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiPanel>
);
