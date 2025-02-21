import React, { useCallback } from 'react';

import { changeTheme, selectCurrentTheme } from '@/entities/theme';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { Icon } from '@/shared/ui';

export function ChangeTheme() {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'));
    },
    [currentTheme, dispatch],
  );

  return (
    <div>
      <Icon onClick={onClick} type={currentTheme === 'light' ? 'moon' : 'sun'} />
    </div>
  );
}
