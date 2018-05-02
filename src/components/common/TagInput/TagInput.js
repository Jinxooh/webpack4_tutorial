import React, { Component } from 'react';
import pressedEnter from './helpers/pressedEnter';
import calculateWidth from './helpers/calculateWidth';
import Tags from './Tags';
import './TagInput.scss';

class TagInput extends Component {
  state = {
    input: null,
    content: '',
    inputWidth: 80,
    tagArray: [],
    tagIndex: 0,
  };

  onChange = (e) => {
    const { value } = e.target;
    const inputWidth = calculateWidth(value);

    this.setState({
      content: e.target.value,
      inputWidth,
    });
  }

  onEnterKeyPress = pressedEnter(() => {
    const { tagArray, content, tagIndex } = this.state;
    this.setState({
      tagArray: tagArray.concat({ index: tagIndex, content }),
      content: '',
      tagIndex: tagIndex + 1,
    });
  })

  onRemove = (e, index) => {
    const { tagArray } = this.state;
    this.setState({
      tagArray: tagArray.filter(t => t.index !== index),
    });
  }

  onClick = () => {
    this.input.focus();
  }

  render() {
    const { onEnterKeyPress, onChange, onRemove, onClick } = this;
    const { content, tagArray, inputWidth } = this.state;

    return (
      <div className="tag-input">
        <Tags tagArray={tagArray} onRemove={onRemove} onClick={onClick}>
          <input ref={(ref) => { this.input = ref; }} onKeyPress={onEnterKeyPress} onChange={onChange} value={content} style={{ width: `${inputWidth}px` }} />
        </Tags>
      </div>
    );
  }
}

export default TagInput;