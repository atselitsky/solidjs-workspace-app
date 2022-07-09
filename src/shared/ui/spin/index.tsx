import { Spinner, SpinnerProps } from '@hope-ui/solid';
import { Component } from 'solid-js';

export const Spin: Component<SpinnerProps> = props => {
  return <Spinner {...props} />;
};
