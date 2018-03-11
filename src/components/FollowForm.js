import React from 'react';
import { Card, TextInput, Button, Dropdown } from './common';
import categories from '../categories';

// REDUX
import { connect } from 'react-redux';
import { updateFollowInput, addFollow, fetchFollowHeadlines } from '../store/actions';

class FollowForm extends React.PureComponent {

  onAddClick(text) {
    const { fetchFollowHeadlines, addFollow } = this.props;
    addFollow(text);
    fetchFollowHeadlines(text);
  }

  render() {
    const { followInput, updateFollowInput } = this.props;
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
          <Button size="large" textInputSubmit={true} onClick={() => this.onAddClick(followInput)}>
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

const mapStateToProps = ({ data }) => {
  return {
    followTags: data.followTags,
    followInput: data.followInput
  }
};

export default connect(mapStateToProps, { updateFollowInput, addFollow, fetchFollowHeadlines })(FollowForm);
