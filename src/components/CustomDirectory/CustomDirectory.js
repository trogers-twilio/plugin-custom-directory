import * as React from "react";
import { Tab, templates, withTaskContext, Actions } from '@twilio/flex-ui';
import {
  TabContainer, InputContainer, StyledInput, ItemContainer
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
      if (!searchTerm) {
        return true;
      }
      return entry.name.includes(searchTerm);
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
          />
        </InputContainer>
        <ItemContainer
          key="custom-directory-item-container"
          className="Twilio-WorkerDirectory-Workers"
          vertical
        >
          {console.warn('Directory entries:', this.filteredDirectory())}
          {this.filteredDirectory().map(item => {
            console.warn('Directory item:', item);
            return (
              <DirectoryItem
                item={item}
                key={item.id}
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
