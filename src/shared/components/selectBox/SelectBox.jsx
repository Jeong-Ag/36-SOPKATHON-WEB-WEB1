/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as S from './SelectBox.styles';

const DEFAULT_PLACEHOLDER = 'Select a category';

const SelectBox = ({ options = [], value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selected) => {
    onChange?.(selected);     // 외부 onChange 호출
    setIsOpen(false);         // 드롭다운 닫기
  };

  return (
    <div css={S.selectWrapper}>
      <button type="button" css={[S.selectHeader, isOpen && S.selectHeaderExpanded]} onClick={() => setIsOpen(!isOpen)}>
        <span css={S.selectText}>{value || DEFAULT_PLACEHOLDER}</span>
        {isOpen ? (
          <svg css={S.caretIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#484848" />
          </svg>
        ) : (
          <svg css={S.caretIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {isOpen && (
        <ul css={S.dropdown}>
          {options.map((opt) => (
            <li key={opt} css={S.dropdownItem} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
