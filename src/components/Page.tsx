import {
  EuiAvatar,
  EuiBreadcrumb,
  EuiButton,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiPageTemplate,
  EuiPageTemplateProps,
  EuiSideNavItemType,
  IconType,
} from '@elastic/eui';
import { NextRouter, useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export type PageProps = {
  title: string;
  children: ReactNode | ReactNode[];
  restrictWidth?: EuiPageTemplateProps['restrictWidth'];
};

export type NavItem = EuiSideNavItemType<{ href: string }>;

const createSidebarItem = (
  push: NextRouter['push'],
  name: string,
  href?: string,
  icon?: IconType,
  items: NavItem[] = [],
  clickable = true
): NavItem => ({
  id: uuid(),
  name,
  ...(clickable
    ? {
        href,
      }
    : {}),
  ...(icon
    ? {
        icon: <EuiIcon type={icon} />,
      }
    : {}),
  ...(clickable
    ? {
        onClick: e => {
          e.preventDefault(), push(href);
        },
      }
    : {}),
  ...(items.length > 0
    ? {
        items,
        forceOpen: true,
      }
    : {}),
});

const Page: FC<PageProps> = ({ title, children, restrictWidth = true }) => {
  const { push } = useRouter();

  const [isFixed] = useState(false);

  const breadcrumbs: EuiBreadcrumb[] = [
    {
      text: 'Management',
      href: '#',
      onClick: e => {
        e.preventDefault();
      },
    },
    {
      text: 'Users',
    },
  ];

  useEffect(() => {
    if (isFixed) document.body.classList.add('euiBody--headerIsFixed--double');

    return () => {
      document.body.classList.remove('euiBody--headerIsFixed--double');
    };
  }, [isFixed]);

  const headers = (
    <>
      <EuiHeader
        theme="dark"
        position={isFixed ? 'fixed' : 'static'}
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType="logoElastic" key={0}>
                Elastic
              </EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <EuiHeaderSectionItemButton aria-label="Account menu" key={0}>
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position={isFixed ? 'fixed' : 'static'}
        sections={[
          {
            items: [
              <EuiHeaderSectionItemButton aria-label="Account menu" key={0}>
                <EuiAvatar type="space" name="Default Space" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
          {
            items: [
              <EuiHeaderSectionItemButton
                aria-label="News feed: Updates available"
                key={0}
                notification={true}>
                <EuiIcon type="cheer" size="m" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
    </>
  );

  const sidebarItems = [
    createSidebarItem(
      push,
      'Luka',
      undefined,
      undefined,
      [
        createSidebarItem(push, 'Home', '/luka', 'grid'),
        createSidebarItem(
          push,
          'Tables',
          undefined,
          'tableDensityNormal',
          [
            createSidebarItem(
              push,
              'Country Population',
              '/luka/tables/country-population',
              'globe'
            ),
          ],
          false
        ),
      ],
      false
    ),
  ];

  return (
    <>
      {headers}
      <EuiPageTemplate restrictWidth={restrictWidth}>
        {/* <EuiPageTemplate.Sidebar>
          <EuiSideNav
            items={sidebarItems}
            mobileTitle="Navigate around the page"
            href="#"
          />
        </EuiPageTemplate.Sidebar> */}
        <EuiPageTemplate.Header
          pageTitle={title}
          rightSideItems={[
            <EuiButton color="success" fill key={0}>
              Test
            </EuiButton>,
          ]}
        />
        {(Array.isArray(children) ? children : [children]).map((child, i) => (
          <EuiPageTemplate.Section grow={false} key={i}>
            {child}
          </EuiPageTemplate.Section>
        ))}
      </EuiPageTemplate>
    </>
  );
};

export default Page;
