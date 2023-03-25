import {
  EuiAccordion,
  EuiPanel,
  EuiSpacer,
  EuiSwitch,
  htmlIdGenerator,
  useEuiTheme,
} from '@elastic/eui';
import { FC, ReactNode } from 'react';

import { SectionDefinition } from '../../types';

export interface BuilderSectionProps {
  section: SectionDefinition;
  setSection: (newSection: SectionDefinition) => void;
  children: ReactNode | ReactNode[];
}

export const BuilderSection: FC<BuilderSectionProps> = ({
  section,
  setSection,
  children,
}) => {
  const id = htmlIdGenerator()();
  const { euiTheme } = useEuiTheme();

  return (
    <EuiAccordion
      id={`${id}-section`}
      initialIsOpen={false}
      buttonContent={
        <span
          style={{
            fontWeight: euiTheme.font.weight.medium,
          }}>
          {section.title}
        </span>
      }
      extraAction={
        <EuiSwitch
          label={null}
          compressed
          checked={section.enabled}
          onChange={e => {
            setSection({
              ...section,
              enabled: e.target.checked,
            });
          }}
        />
      }
      paddingSize="none"
      arrowDisplay="right">
      <EuiSpacer size="s" />
      <EuiPanel
        hasBorder={true}
        hasShadow={false}
        paddingSize="m"
        color="subdued">
        {children}
      </EuiPanel>
    </EuiAccordion>
  );
};
