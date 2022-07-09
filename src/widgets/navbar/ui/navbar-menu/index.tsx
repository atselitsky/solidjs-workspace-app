import { Component, JSX } from 'solid-js';
import styles from './styles.module.css';

export const NavbarMenu: Component<{ children: JSX.Element }> = ({ children }) => {
  return <menu class={`navbar ${styles.navbar}`}>{children}</menu>;
};
