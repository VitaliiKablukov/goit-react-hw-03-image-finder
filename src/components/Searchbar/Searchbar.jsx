import { Component } from 'react';
import {
  Wrapper,
  SearchForm,
  SearchFormButton,
  Input,
} from './Searchbar.styled';
import { AiOutlineEye } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    inputText: '',
  };
  onChangeInput = e => {
    const textInput = e.target.value;
    this.setState(() => ({ inputText: textInput }));
  };
  onSubmitForm = e => {
    e.preventDefault();

    const { inputText } = this.state;
    if (this.state.inputText === '') {
      alert('Введіть імя картинок які ви хочете отримати');
    } else {
      this.props.onSubmit(inputText);
    }
  };
  render() {
    return (
      <Wrapper>
        <SearchForm onSubmit={this.onSubmitForm}>
          <SearchFormButton type="submit">
            <AiOutlineEye
              style={{
                height: '40px',
                fontSize: '40px',
              }}
            />
          </SearchFormButton>

          <Input
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Wrapper>
    );
  }
}
