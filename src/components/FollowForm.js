import React from 'react';
import { Card, TextInput, Button, Dropdown } from './common';
import categories from '../categories';

class FollowForm extends React.PureComponent {
  state = {
    followInput: ''
  };

  onAddHandler() {
    this.props.onAddClick(this.state.followInput);
    this.setState({ followInput: '' })
  }

  render() {
    const { followInput } = this.state;
    const { wrapperDiv, flexDiretion } = styles;
    return (
      <Card title={"Add a category or keyword to keep track of"} className="follow-form">
        <div style={wrapperDiv}>
          <div style={{ flex: 1 }}>
            <TextInput
              placeholder="Type a category name or keyword"
              style={flexDiretion}
              onChange={({target}) => this.setState({followInput: target.value})}
              value={followInput}
            />
            <Dropdown items={categories}/>
          </div>
          <Button size="large" textInputSubmit={true} onClick={() => this.onAddHandler()}>
            Add
          </Button>
        </div>
      </Card>
    );
  }
}

const styles = {
  wrapperDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    flex: 1
  }
};

export default FollowForm;