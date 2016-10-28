import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

import Icon from '../components/Icon';
import NoteTitle from '../components/NoteTitle';
import NoteEditor from '../components/NoteEditor';
import MarkdownEditor from '../components/MarkdownEditor';

class Note extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  state = {
    editMode: false,
  };

  handleChange = (note) => {
    this.props.onChange(note);
  };
  
  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };
  
  renderActionBar() {
    return (
      <div className="action-bar">
        <div className="tags" />
        <div className="osx-buttons actions">
          {this.props.note.IsMarkdown ? 
            <div
              onClick={this.toggleEditMode}
              className={classNames('osx-button', {active: this.state.editMode})}
            >
              <Icon iconName="pencil" />
            </div>
            : null
          }
          <div className="osx-button">
            <Icon iconName="history" />
          </div>
          <div className="osx-button">
            <Icon iconName="trashcan" />
          </div>
        </div>
      </div>
    );
  }
  
  render () {
    const {
      note,
    } = this.props;
    return (
      <div className='note'>
        <NoteTitle
          toggleEditMode={note.IsMarkdown ? this.toggleEditMode : null}
          editMode={this.state.editMode}
        />
        <NoteEditor
          active={!note.IsMarkdown}
          note={note}
          onChange={this.handleChange}
        />
        <MarkdownEditor
          active={note.IsMarkdown}
          editMode={this.state.editMode}
          note={note}
        />
      </div>
    );
  }
}

export default Note;
