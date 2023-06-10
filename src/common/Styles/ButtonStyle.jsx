import styled from 'styled-components';

//일반 버튼 컴포넌트
const ClickButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  width: ${props => props.width || '128px'};
  height: ${props => props.height || '40px'};

  background: linear-gradient(100deg, rgba(66, 230, 149, 0.7) 3.56%, rgba(59, 178, 184, 0.7) 96.4%);
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: none;
  cursor: pointer;

  color: #FFFFFF;

  &:hover {
    background: linear-gradient(100deg, rgba(66, 230, 149, 1) 3.56%, rgba(59, 178, 184, 1) 96.4%);
  }
`;

// 토글 버튼용 스타일드 컴포넌트
const SwitchInput = styled.input`
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
  width: ${({ width }) => width || '148px'};
  height: ${({ height }) => height || '49px'};
  background: #fff;
  border-radius: 100px;
  transition: 0.2s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #efefef;
  }
`;

const OnButton = styled.span`
  position: absolute;
  left: 3px;
  display: inline-block;
  width: ${({ width }) => width || '73px'};
  height: ${({ height }) => height || '40px'};
  transition: 0.2s;
  background: linear-gradient(100deg, rgba(66, 230, 149, 0.8) 3.56%, rgba(59, 178, 184, 0.8) 96.4%);
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 100px;

  /* 버튼 움직일 때 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 3px);
    transform: translateX(-100%);
    background: linear-gradient(100deg, rgba(66, 230, 149, 0.8) 3.56%, rgba(59, 178, 184, 0.8) 96.4%);
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
`;

const OffText = styled.span`
  font-weight: ${({fontWeight}) => fontWeight || '700'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: 19px;
  color: #ffffff;
  position: relative;
  z-index: 1;
  margin-left: ${({ margin }) => margin || '15px'};

  /* ON 버튼이 눌리면 text 색 변화 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    color: rgba(192, 192, 192, 1);
  }
`;

const OnText = styled.span`
  font-weight: ${({fontWeight}) => fontWeight || '700'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  line-height: 19px;
  color: rgba(192, 192, 192, 1);
  position: relative;
  z-index: 1;
  margin-right: ${({ margin }) => margin || '22px'};

  /* ON 버튼이 눌리면 text 색 변화 */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    color: #ffffff;
  }
`;

export {ClickButton, SwitchInput, SwitchLabel, OnButton, TextContainer, OffText, OnText};