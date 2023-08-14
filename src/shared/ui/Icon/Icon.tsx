import { memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
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
