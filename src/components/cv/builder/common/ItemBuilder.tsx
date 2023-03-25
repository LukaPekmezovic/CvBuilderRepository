import {
  EuiBadge,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';
import { ReactElement, ReactNode, useEffect } from 'react';

import { FlyoutContent } from '../../CvBuilder';

export interface ItemBuilderProps<Item> {
  index: number;
  title: string;
  item: Item;
  setItem: (item: Item) => void;
  panelContent: ReactNode;
  children: ReactNode;
  setFlyoutVisible: (value: boolean) => void;
  setFlyoutContent: (content: FlyoutContent) => void;
}

export function ItemBuilder<Item>({
  index,
  title,
  item,
  setItem,
  children,
  panelContent,
  setFlyoutContent,
  setFlyoutVisible,
}: ItemBuilderProps<Item>): ReactElement {
  useEffect(() => {
    setFlyoutContent({
      title,
      children,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <EuiFlexGroup gutterSize="m" alignItems="center" responsive={false}>
      <EuiFlexItem grow={false}>
        <EuiBadge>{index + 1}</EuiBadge>
      </EuiFlexItem>
      <EuiFlexItem>{panelContent}</EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          iconType="pencil"
          onClick={() => {
            setFlyoutContent({
              title,
              children,
            });
            setFlyoutVisible(true);
          }}
          aria-label="Edit"
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          iconType="trash"
          color="danger"
          size="s"
          onClick={() => {
            setItem(undefined);
          }}
          aria-label="Delete"
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
