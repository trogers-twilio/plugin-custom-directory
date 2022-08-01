import * as React from "react";
import {
  Tab,
  templates,
  withTaskContext,
  Actions,
  Icon
} from '@twilio/flex-ui';
import {
  InputContainer,
  ItemContainer,
  StyledInput,
  StyledInputAdornment,
  TabContainer,
} from './CustomDirectoryComponents';
import DirectoryItem from './DirectoryItem';

const directoryEntries = [
  {
    number: '+15551234567',
    name: 'Allen Wentworth'
  }, {
    number: '+18885551212',
    name: 'Jack Harrington'
  }
];

class CustomDirectory extends React.Component {
  state = {
    searchTerm: ''
  }

  filteredDirectory = () => {
    const { searchTerm } = this.state;
    return directoryEntries.filter(entry => {
      if (!entry.name && !entry.number) {
        return false;
      }
      if (!searchTerm) {
        return true;
      }
      return !!(entry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.number?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  }

  onSearchInputChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  onTransferClick = item => payload => {
    console.log('Transfer clicked');
    console.log('Transfer item:', item);
    console.log('Transfer payload:', payload);

    const { mode } = payload;


    Actions.invokeAction('HideDirectory');
  }

  render() {
    return (
      <TabContainer key="custom-directory-container">
        <InputContainer key="custom-directory-input-container">
          <StyledInput
            key="custom-directory-input-field"
            onChange={this.onSearchInputChange}
            placeholder={templates.WorkerDirectorySearchPlaceholder()}
            startAdornment={
              <StyledInputAdornment position="start">
                <Icon icon="Search" />
              </StyledInputAdornment>
            }
          />
        </InputContainer>
        <ItemContainer
          key="custom-directory-item-container"
          className="Twilio-WorkerDirectory-Queues"
          vertical
        >
          {this.filteredDirectory().map(item => {
            return (
              <DirectoryItem
                item={item}
                key={item.number}
                onTransferClick={this.onTransferClick(item)}
              />
            );
          })}
        </ItemContainer>
      </TabContainer>
    )
  }
}

export default withTaskContext(CustomDirectory);
