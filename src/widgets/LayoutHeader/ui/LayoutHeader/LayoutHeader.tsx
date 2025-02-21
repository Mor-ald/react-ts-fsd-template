import css from './LayoutHeader.module.css';

import { ChangeTheme } from '@/features/theme/changeTheme';

export function LayoutHeader() {
  return (
    <header className={css.root}>
      <h2>Project FSD</h2>
      <div className={css.right}>
        <ChangeTheme />
      </div>
    </header>
  );
}
