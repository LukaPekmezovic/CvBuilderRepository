import { EuiButton, EuiButtonSize } from '@elastic/eui';
import { FixMe } from 'lp-project-1/lib/types';
import moment from 'moment';
import { FC, MutableRefObject } from 'react';
import { useReactToPrint } from 'react-to-print';

import { Person, SectionDefinition } from '../types';

export interface PrintButtonProps {
  buttonSize: EuiButtonSize;
  person: Person;
  sections: SectionDefinition[];
  printRef?: MutableRefObject<FixMe>;
}

export const PrintButton: FC<PrintButtonProps> = ({
  buttonSize,
  person,
  printRef,
}) => {
  const handlePrint = useReactToPrint({
    content: () => printRef?.current,
    documentTitle: `${person.firstName}-${person.lastName}-${moment().format(
      'MMYY'
    )}-cv`,
  });

  return (
    <EuiButton
      iconType="document"
      onClick={handlePrint}
      isDisabled={!printRef}
      fill
      color="success"
      size={buttonSize}>
      Print
    </EuiButton>
  );
};
