import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import './App.css';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const defaultDate = '2017-08-12';

//今日之前和8.31号之后不可选
function disabledDate(current) {
  	var end=new Date(2017,7,31);
  	if(current.valueOf()<Date.now()){
  		return true;
  	}else if(current.valueOf()>end){
  		return true;
  	}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: defaultDate,
      value: null
    };
  }

  handleChange = (value, dateString) => {
    this.setState({dataInfo: dateString});
  }

  render() {
  	var value = this.state.value;
    return (
        <div>
            <DatePicker disabledDate={disabledDate}
             			defaultValue={moment(defaultDate, 'YYYY-MM-DD')}
             			onChange={this.handleChange}
              />
            <span>当前日期为{this.state.dataInfo}</span>
        </div>
    );
  }
}

export default App;
