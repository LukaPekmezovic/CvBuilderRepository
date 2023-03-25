import { EuiButton, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import { ReactElement } from 'react';

import { FlyoutContent } from '../../CvBuilder';
import { SectionDefinition } from '../../types';
import { BuilderSection } from './BuilderSection';
import { ItemBuilder, ItemBuilderProps } from './ItemBuilder';

export interface ItemListBuilderProps<Item> {
  section: SectionDefinition;
  setSection: (newSection: SectionDefinition) => void;
  items: Item[];
  setItems: (item: Item[]) => void;
  itemComponentProps: (
    item: Item,
    setItem: (item: Item) => void
  ) => Pick<ItemBuilderProps<Item>, 'panelContent' | 'children' | 'title'>;
  itemConstructor: () => Item;
  setFlyoutVisible: (value: boolean) => void;
  setFlyoutContent: (content: FlyoutContent) => void;
}

export function ItemListBuilder<Item>({
  section,
  setSection,
  items,
  setItems,
  itemComponentProps,
  itemConstructor,
  setFlyoutVisible,
  setFlyoutContent,
}: ItemListBuilderProps<Item>): ReactElement {
  return (
    <BuilderSection section={section} setSection={setSection}>
      <EuiFlexGroup direction="column" gutterSize="m">
        {items.map((item, i) => {
          const setItem = (item: Item) => {
            const newItems = [...items];
            newItems[i] = item;
            setItems(newItems.filter(current => !!current));
          };
          return (
            <EuiFlexItem key={i} grow={false}>
              <ItemBuilder
                {...itemComponentProps(item, setItem)}
                index={i}
                item={item}
                setItem={setItem}
                setFlyoutContent={setFlyoutContent}
                setFlyoutVisible={setFlyoutVisible}
              />
            </EuiFlexItem>
          );
        })}
        <EuiFlexItem grow={false}>
          <EuiButton
            iconType="plus"
            fullWidth
            size="s"
            onClick={() => {
              const newItems = [...items];
              newItems.push(itemConstructor());
              setItems(newItems);
            }}>
            Add new item
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </BuilderSection>
  );
}
