import { NavbarMenu } from './navbar-menu';
import { NavbarItem, NavbarItemProps } from './navbar-item';
import { Component, For } from 'solid-js';

export type NavbarProps = {
  links: NavbarItemProps[];
};

export const Navbar: Component<NavbarProps> = ({ links }) => {
  return (
    <NavbarMenu>
      <div></div>
      <For each={links}>{item => <NavbarItem path={item.path} title={item.title} />}</For>
    </NavbarMenu>
  );
};

export * from './navbar-menu';
export * from './navbar-item';
