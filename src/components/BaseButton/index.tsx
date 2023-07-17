import { BaseButtonContainer } from './style';

interface PropsBaseButton {
  text: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  loading?: boolean;
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButton: React.FC<PropsBaseButton> = ({
  type,
  text,
  color,
  borderRadius,
  padding,
  fontSize,
  onButtonClick,
  loading,
}) => {
  return (
    <BaseButtonContainer
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      fontSize={fontSize}
      type={type}
      onClick={onButtonClick}
      disabled={loading}
    >
      {loading ? 'Carregando...' : text}
    </BaseButtonContainer>
  );
};

export default BaseButton;
