import {
  EuiDatePicker,
  EuiDatePickerRange,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiMarkdownEditor,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import moment from 'moment';
import { FC } from 'react';

import { SectionBuilderProps } from '../types';
import { ItemListBuilder } from './common/ItemListBuilder';

export const WorkExperienceBuilder: FC<SectionBuilderProps> = ({
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
    items={person.workExperience}
    setItems={newItems => {
      setPerson({
        ...person,
        workExperience: newItems,
      });
    }}
    setFlyoutContent={setFlyoutContent}
    setFlyoutVisible={setFlyoutVisible}
    itemConstructor={() => {
      const now = new Date();
      return {
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
      };
    }}
    itemComponentProps={(item, setItem) => ({
      title: 'Work Experience Item',
      panelContent: (
        <>
          <EuiTitle size="xxs">
            <h4>{item.company.label}</h4>
          </EuiTitle>
          <EuiText size="s">{item.title}</EuiText>
        </>
      ),
      children: (
        <>
          <EuiFormRow label="Company" fullWidth>
            <EuiFlexGroup gutterSize="m">
              <EuiFlexItem grow={1}>
                <EuiFormRow label="Name" fullWidth>
                  <EuiFieldText
                    compressed
                    fullWidth
                    value={item.company.label}
                    onChange={e => {
                      setItem({
                        ...item,
                        company: {
                          ...item.company,
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
                    value={item.company.href}
                    onChange={e => {
                      setItem({
                        ...item,
                        company: {
                          ...item.company,
                          href: e.target.value,
                        },
                      });
                    }}
                  />
                </EuiFormRow>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFormRow>
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
