import { BaseButtonContainer } from "./style";

interface PropsBaseButton {
  text: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButton: React.FC<PropsBaseButton> = ({
  text,
  color,
  borderRadius,
  padding,
  fontSize,
  onButtonClick,
}) => {
  return (
    <BaseButtonContainer
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      fontSize={fontSize}
      onClick={onButtonClick}
    >
      {text}
    </BaseButtonContainer>
  );
};

export default BaseButton;
