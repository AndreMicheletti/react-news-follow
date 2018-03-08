import React from 'react';
import { Card, TextInput, Button, Dropdown } from './common';
import categories from '../categories';

// REDUX
import { connect } from 'react-redux';
import { updateFollowInput, addFollow } from '../store/actions';

class FollowForm extends React.PureComponent {
  state = {
    followInput: ''
  };

  onAddHandler() {
    this.props.onAddClick(this.state.followInput);
    this.setState({ followInput: '' })
  }

  render() {
    const { followInput, updateFollowInput, addFollow } = this.props;
    const { wrapperDiv, flexDiretion } = styles;
    return (
      <Card title={"Add a category or keyword to keep track of"} className="follow-form">
        <div style={wrapperDiv}>
          <div style={{ flex: 1 }}>
            <TextInput
              placeholder="Type a category name or keyword"
              style={flexDiretion}
              onChange={({target}) => updateFollowInput(target.value)}
              value={followInput}
            />
            <Dropdown items={categories}/>
          </div>
          <Button size="large" textInputSubmit={true} onClick={() => addFollow()}>
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

const mapStateToProps = (storeState) => {
  return {
    followTags: storeState.followTags,
    followInput: storeState.followInput
  }
};

export default connect(mapStateToProps, { updateFollowInput, addFollow })(FollowForm);
