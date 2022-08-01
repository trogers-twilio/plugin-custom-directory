import * as React from "react";
import {
  Icon,
  IconButton,
  templates,
  withTheme
} from '@twilio/flex-ui';
import {
  ButtonContainer,
  CallButton,
  ItemInnerContainer
} from '../CustomDirectoryComponents';
import {
  ItemAvatar,
  ItemTitleContainer,
  ItemTitleSecondLine
} from './DirectoryItemComponents';

class DirectoryItem extends React.Component {
  onWarmTransferClick = (e) => {
    this.props.onTransferClick({ mode: "WARM" });
  };

  onColdTransferClick = (e) => {
    this.props.onTransferClick({ mode: "COLD" });
  };

  render() {
    const { item } = this.props;
    return (
      <ItemInnerContainer className="Twilio-WorkerDirectory-Queue" noGrow noShrink>
        <ItemAvatar noGrow noShrink className="Twilio-WorkerDirectory-QueueAvatar">
          <Icon icon="Directory" />
        </ItemAvatar>
        <ItemTitleContainer className="Twilio-WorkerDirectory-QueueContent">
          <div>{item.name}</div>
          <ItemTitleSecondLine>{item.number}</ItemTitleSecondLine>
        </ItemTitleContainer>
        <ButtonContainer className="Twilio-WorkerDirectory-ButtonContainer">
          <CallButton
            icon="Call"
            onClick={this.onWarmTransferClick}
            themeOverride={this.props.theme.WorkerDirectory.ItemActionButton}
            title={templates.WarmTransferTooltip({ name: item.name })}
            size="small"
            variant="secondary"
          />
          <IconButton
            icon="Transfer"
            onClick={this.onColdTransferClick}
            themeOverride={this.props.theme.WorkerDirectory.ItemActionButton}
            title={templates.ColdTransferTooltip({ name: item.name })}
            size="small"
            variant="secondary"
          />
        </ButtonContainer>
      </ItemInnerContainer>
    )
  }
}

export default withTheme(DirectoryItem);
