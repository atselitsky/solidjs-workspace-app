import { Component } from 'solid-js';
import { Heading, HeadingProps } from '@hope-ui/solid';

export const Title: Component<HeadingProps> = props => {
  return <Heading {...props} />;
};
