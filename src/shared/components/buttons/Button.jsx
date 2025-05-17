/** @jsxImportSource @emotion/react */
import { buttonVariantStyles } from './Button.styles.js';

const Button = ({ text, variant = 'long', ...props }) => {
  return (
    <button css={buttonVariantStyles[variant]} {...props}>
      {text}
    </button>
  );
};

export default Button;
