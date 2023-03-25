import {
  EuiDatePicker,
  EuiDatePickerRange,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiMarkdownEditor,
  EuiTitle,
} from '@elastic/eui';
import moment from 'moment';
import { FC } from 'react';

import { SectionBuilderProps } from '../types';
import { ItemListBuilder } from './common/ItemListBuilder';

export const EducationBuilder: FC<SectionBuilderProps> = ({
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
    items={person.education}
    setItems={newItems => {
      setPerson({
        ...person,
        education: newItems,
      });
    }}
    setFlyoutContent={setFlyoutContent}
    setFlyoutVisible={setFlyoutVisible}
    itemConstructor={() => {
      const now = new Date();
      return {
        institution: {
          label: 'Institution name',
          href: '#',
        },
        description: '',
        dateRange: {
          from: now,
          to: now,
        },
      };
    }}
    itemComponentProps={(item, setItem) => ({
      title: 'Education',
      panelContent: (
        <>
          <EuiTitle size="xxs">
            <h4>{item.institution.label}</h4>
          </EuiTitle>
        </>
      ),
      children: (
        <>
          <EuiFormRow label="Institution" fullWidth>
            <EuiFlexGroup gutterSize="m">
              <EuiFlexItem grow={1}>
                <EuiFormRow label="Name" fullWidth>
                  <EuiFieldText
                    compressed
                    fullWidth
                    value={item.institution.label}
                    onChange={e => {
                      setItem({
                        ...item,
                        institution: {
                          ...item.institution,
                          label: e.target.value,
                        },
                      });
                    }}
                  />
                </EuiFormRow>
              </EuiFlexItem>
              <EuiFlexItem grow={1}>
                <EuiFormRow label="Website URL" fullWidth>
                  <EuiFieldText
                    compressed
                    fullWidth
                    value={item.institution.href}
                    onChange={e => {
                      setItem({
                        ...item,
                        institution: {
                          ...item.institution,
                          href: e.target.value,
                        },
                      });
                    }}
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFormRow>
          <EuiFormRow label="Period" fullWidth>
            <EuiDatePickerRange
              fullWidth
              startDateControl={
                <EuiDatePicker
                  dateFormat="LL"
                  selected={moment(item.dateRange.from)}
                  onChange={date => {
                    setItem({
                      ...item,
                      dateRange: {
                        ...item.dateRange,
                        from: date.toDate(),
                      },
                    });
                  }}
                  aria-label="Start date"
                />
              }
              endDateControl={
                <EuiDatePicker
                  dateFormat="LL"
                  selected={moment(item.dateRange.to)}
                  onChange={date => {
                    setItem({
                      ...item,
                      dateRange: {
                        ...item.dateRange,
                        to: date.toDate(),
                      },
                    });
                  }}
                  aria-label="End date"
                />
              }
            />
          </EuiFormRow>
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
        </>
      ),
    })}
  />
);
