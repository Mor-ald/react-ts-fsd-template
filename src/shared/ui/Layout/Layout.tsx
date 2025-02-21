import css from './Layout.module.css';

import type { ReactNode } from 'react';

type Props = {
  headerSlot?: ReactNode;
  sidebarSlot?: ReactNode;
  footerSlot?: ReactNode;
  children: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.headerSlot}
      {props.sidebarSlot}

      <div className={css.content}>{props.children}</div>

      {props.footerSlot}
    </div>
  );
}
