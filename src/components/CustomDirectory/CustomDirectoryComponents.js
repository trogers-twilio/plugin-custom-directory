import {
  FlexBox,
  FlexBoxColumn,
  IconButton,
  styled
} from '@twilio/flex-ui';
import Input from '@material-ui/core/Input';
import InputAdornment from "@material-ui/core/InputAdornment";

export const CallButton = styled(IconButton)`
  margin-right: ${(props) => props.theme.tokens.spacings.space30};
`;

export const ItemInnerContainer = styled(FlexBox)`
  align-items: center;
  padding-left: ${(p) => p.theme.tokens.spacings.space30};
  padding-right: ${(p) => p.theme.tokens.spacings.space30};
  color: inherit;
  outline: none;
  background: none;
  ${(props) => props.theme.WorkerDirectory.Item}
  &:hover, &:focus-within {
    & .Twilio-WorkerDirectory-ButtonContainer {
      opacity: 1;
      display: flex;
      & * {
        max-width: inherit;
        max-height: inherit;
      }
    }
  }
`;

export const ButtonContainer = styled("div")`
  opacity: 0;
  display: flex;
  & * {
    max-width: 1px;
    max-height: 1px;
  }
`;

export const ItemContainer = styled(FlexBox)`
  flex-grow: 1;
  overflow-y: auto;
  ${(props) => props.theme.WorkerDirectory.ItemsContainer}
`;

export const StyledInput = styled(Input)`
  width: 100%;
`;

export const StyledInputAdornment = styled(InputAdornment)`
  height: ${(props) => props.theme.tokens.sizings.sizeSquare100};
  background: ${(props) => props.theme.tokens.backgroundColors.colorBackground};
  border-right: ${(props) =>
    `${props.theme.tokens.borderWidths.borderWidth10} solid ${props.theme.tokens.borderColors.colorBorderWeaker}`};
`;

export const InputContainer = styled("div")`
  padding: ${(props) => props.theme.tokens.spacings.space50};
  padding-top: ${(props) => props.theme.tokens.spacings.space60};
`;

export const TabContainer = styled(FlexBoxColumn)`
  overflow-x: hidden;
`;
