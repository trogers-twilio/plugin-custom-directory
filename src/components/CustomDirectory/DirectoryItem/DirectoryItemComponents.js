import { FlexBox, styled } from '@twilio/flex-ui';

export const WorkerMarginPlaceholder = styled(FlexBox)`
  width: 6px;
`;

export const ItemTitleContainer = styled("div")`
  flex: 1 1 auto;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: ${(props) => props.theme.tokens.spacings.space40};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${(props) => props.theme.tokens.fontSizes.fontSize30};
  font-weight: ${(props) => props.theme.tokens.fontWeights.fontWeightBold};
  line-height: ${(props) => props.theme.tokens.lineHeights.lineHeight20};
`;

export const ItemTitleSecondLine = styled("div")`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
`;

export const ItemAvatar = styled(FlexBox)`
  width: ${(props) => props.theme.tokens.sizings.sizeSquare100};
  height: ${(props) => props.theme.tokens.sizings.sizeSquare100};
  margin: ${(props) => props.theme.tokens.spacings.space30};
  margin-right: 0;
  border-radius: 50%;
  overflow: hidden;
  justify-content: center;

  ${(props) => props.theme.WorkerDirectory.QueueItem.Avatar};
`;
