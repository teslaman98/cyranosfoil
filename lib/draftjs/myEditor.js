import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import utilStyles from '../../styles/utils.module.css';

class MyEditor extends Component{
    constructor(props) {
      super(props);
      this.state={editorState: EditorState.createEmpty()};
      this.onChange = editorState => this.setState({editorState});
      this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState) {
      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return 'handled';
      }
      return 'not-handled';
    }

    _onBoldClick() {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    _onItalicClick() {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }
    _onUnderlineClick() {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }
  
    render() {
      return (
        <div className={utilStyles.editorContainer}>
          <div className={utilStyles.editorButtonContainer}>
            <button 
            type="button"
            data-bs-toggle="button"
            className={`${utilStyles.styleButton} ${'btn btn-outline-dark'}`} 
            onClick={this._onBoldClick.bind(this)}
            >B</button>
            <button 
            className={`${utilStyles.styleButton} ${'btn btn-outline-dark'}`} 
            onClick={this._onItalicClick.bind(this)}
            >I</button>
            <button
            className={`${utilStyles.styleButton} ${'btn btn-outline-dark'}`} 
            onClick={this._onUnderlineClick.bind(this)}
            >U</button>
          </div>
          <div className={utilStyles.textContainer}>
            <Editor
              editorState={this.state.editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
            />
          </div>

        </div>
      );
    }
  }
export default MyEditor;