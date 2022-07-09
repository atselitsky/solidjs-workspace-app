import { Title } from '@/shared/ui';
import { Link } from 'solid-app-router';
import { Component } from 'solid-js';

export type NavBarLinkType = {
  title: string;
  path: string;
};

export type NavbarItemProps = NavBarLinkType;

export const NavbarItem: Component<NavbarItemProps> = ({ title, path }) => {
  return (
    <Link href={path}>
      <Title color="#ededed" size="xl">
        {title}
      </Title>
    </Link>
  );
};
