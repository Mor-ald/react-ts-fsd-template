import css from './Icon.module.css';

import cn from 'classnames';
import React from 'react';

export type IconType = 'like' | 'liked' | 'user' | 'sun' | 'moon' | 'x' | 'trash';

export type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  type: IconType;
};

export function Icon(props: Props) {
  return (
    <div
      className={cn(css.root, { [css.root_clickable]: Boolean(props.onClick) }, props.className)}
      onClick={props.onClick}
    >
      <div className={css.icon} style={{ backgroundImage: `url("/images/${props.type}.svg")` }} />
    </div>
  );
}
