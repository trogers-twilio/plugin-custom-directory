import * as React from "react";
import {
  IconButton,
  UserCard,
  templates,
  withTheme
} from '@twilio/flex-ui';
import { ButtonContainer, CallButton, ItemInnerContainer } from '../CustomDirectoryComponents';
import { WorkerMarginPlaceholder } from './DirectoryItemComponents';

class DirectoryItem extends React.Component {
  onWarmTransferClick = (e) => {
    this.props.onTransferClick({ mode: "WARM" });
  };

  onColdTransferClick = (e) => {
    this.props.onTransferClick({ mode: "COLD" });
  };

  render() {
    return (
      <ItemInnerContainer className="Twilio-WorkerDirectory-Worker" noGrow noShrink>
        <WorkerMarginPlaceholder noGrow noShrink />
        <UserCard
          className="Twilio-WorkerDirectory-UserCard"
          firstLine={this.props.item.name}
          secondLine={this.props.item.number}
          isAvailable
          imageUrl=""
          large
        />
        <ButtonContainer className="Twilio-WorkerDirectory-ButtonContainer">
          <CallButton
            icon="Call"
            onClick={this.onWarmTransferClick}
            themeOverride={this.props.theme.WorkerDirectory.ItemActionButton}
            title={templates.WarmTransferTooltip()}
          />
          <IconButton
            icon="Transfer"
            onClick={this.onColdTransferClick}
            themeOverride={this.props.theme.WorkerDirectory.ItemActionButton}
            title={templates.ColdTransferTooltip()}
          />
        </ButtonContainer>
      </ItemInnerContainer>
    )
  }
}

export default withTheme(DirectoryItem);
