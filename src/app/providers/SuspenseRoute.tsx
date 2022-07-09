import { Component, JSX, Suspense } from 'solid-js';
import { Spin } from '@/shared/ui';

export const SuspenseRoute: Component<{ children: JSX.Element }> = ({ children }) => {
  return <Suspense fallback={<Spin size="xl" />}>{children}</Suspense>;
};
