import { ProgressBarContainer, ProgressBarFill } from './ProgressBar.styles';

const ProgressBar = ({ fill }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill width={fill} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
