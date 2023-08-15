import { memo, ReactNode } from 'react';
import Button, { ButtonProps } from 'antd/es/button';
import { classNames, Mods } from '@/lib/classNames/classNames';

import cls from './CustomButton.module.scss';

export interface CustomButtonProps extends ButtonProps {
    className?: string;
    square?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const CustomButton = memo((props: CustomButtonProps) => {
    const {
        className,
        children,
        square,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <Button
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </Button>
    );
});
