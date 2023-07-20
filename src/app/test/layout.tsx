import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react-api-again-request-scheduler test',
  description: 'react-api-again-request-scheduler test',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
