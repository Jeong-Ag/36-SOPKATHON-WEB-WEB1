/** @jsxImportSource @emotion/react */
import { buttonVariantStyles } from './buttonStyle';

const Button = ({ children, variant = 'long', ...props }) => {
  return (
    <button css={buttonVariantStyles[variant]} {...props}>
      {children}
    </button>
  );
};

export default Button;

