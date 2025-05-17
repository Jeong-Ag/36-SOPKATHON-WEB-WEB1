/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { buttonVariantStyles } from './Button.styles.js';

const Button = ({ text, variant = 'long', disabled = false, ...props }) => {
  const buttonStyle = disabled
    ? buttonVariantStyles[`${variant}Disabled`]
    : buttonVariantStyles[variant];

  return (
    <button
      css={css`
        ${buttonStyle}
      `}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
