import { memo, SVGProps } from 'react';
import { classNames } from '@/lib/classNames/classNames';

export interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        ...otherProps
    } = props;

    return (
        <Svg
            className={
                classNames([className])
            }
            {...otherProps}

        />
    );
});
