import React from 'react';
import { Card, TextInput, Button, Dropdown } from './common';
import categories from '../categories';

class FollowForm extends React.PureComponent {
  render() {
    const { wrapperDiv, flexDiretion } = styles;
    return (
      <Card title={"Add a category or keyword to keep track of"} className="follow-form">
        <div style={wrapperDiv}>
          <div style={{ flex: 1 }}>
            <TextInput placeholder="Type a category name or keyword" style={flexDiretion} />
            <Dropdown items={categories}/>
          </div>
          <Button size="large" textInputSubmit={true}>
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