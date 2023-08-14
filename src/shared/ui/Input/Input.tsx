import { Input } from 'antd';

export interface InputProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const InputCustom = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
}: InputProps) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  return (
    <Input
      value={label}
    />
  );
};
