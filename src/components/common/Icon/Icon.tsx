import { CSSProperties, FC, FunctionComponent, SVGProps } from 'react';
import * as iconComponents from './icons';
import { IconType } from './types';

export interface IconProps {
  name: IconType;
  size?: number;
  fill?: string;
  style?: CSSProperties;
  className?: string;
}

const getIconName = (name: IconType) => `Icon${name}`;
console.log(getIconName);

export const Icon: FC<IconProps> = ({ fill, name, size, style, className, ...rest }) => {
  const IconComponent =
    (iconComponents[getIconName(name) as keyof typeof iconComponents] as FunctionComponent<
      SVGProps<SVGSVGElement>
    >) || null;

  return (
    IconComponent && (
      <IconComponent
        {...rest}
        data-name={name}
        fill={fill}
        className={className}
        style={{ ...style, width: size, height: size }}
      />
    )
  );
};
