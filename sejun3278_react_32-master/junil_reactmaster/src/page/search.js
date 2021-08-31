import React, { Component } from 'react';
import './main.css';

class search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { search } = this.props;

    return (
        <div>
            <form>
              <input type='text' maxLength='20' className='form-control' name='search' placeholder='검색어를 입력해주세요.'
                     defaultValue={search}
              />
              <input type='submit' value='검색' className='btn btn-primary btn-block btn-round'/>
            </form>
        </div>
    );
  }
}

export default search;
