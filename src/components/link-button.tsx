import { Link, LinkProps } from 'expo-router';
import { ReactNode } from 'react';

type LinkButtonProperties = LinkProps<string> & {
  children: ReactNode;
};

export function LinkButton({ children, ...properties }: Readonly<LinkButtonProperties>): ReactNode {
  return (
    <Link className="text-center font-body text-base text-slate-300" {...properties}>
      {children}
    </Link>
  );
}
