import {
  EuiButtonGroup,
  EuiButtonGroupOptionProps,
  EuiButtonSize,
} from '@elastic/eui';
import { Dispatch, FC, SetStateAction, useCallback, useMemo } from 'react';

import { SectionDefinition } from '../../types';

export interface BuilderButtonsProps {
  buttonSize: EuiButtonSize;
  sections: SectionDefinition[];
  setSections: Dispatch<SetStateAction<SectionDefinition[]>>;
}

export const BuilderButtons: FC<BuilderButtonsProps> = ({
  buttonSize,
  sections,
  setSections,
}) => {
  const options = useMemo<EuiButtonGroupOptionProps[]>(
    () =>
      sections.map(section => ({
        id: section.id,
        label: section.title,
        iconType: section.icon,
      })),
    [sections]
  );

  const idMap = useMemo(() => {
    const result = {};

    for (const { enabled, id } of sections) {
      result[id] = enabled;
    }

    return result;
  }, [sections]);

  const onChangeIcons = useCallback(
    (id: string) => {
      const newSections = [];

      for (const section of sections) {
        newSections.push({
          ...section,
          ...(section.id === id
            ? {
                enabled: !section.enabled,
              }
            : {}),
        });
      }

      setSections(newSections);
    },
    [sections, setSections]
  );

  return (
    <EuiButtonGroup
      legend="Enabled sections"
      options={options}
      buttonSize={buttonSize}
      color="primary"
      idToSelectedMap={idMap}
      onChange={onChangeIcons}
      type="multi"
    />
  );
};
