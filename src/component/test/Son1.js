/*
author: nong
time: 2020-39-23 17:39:01
function: 测试下PureComponent
*/
import React, { PureComponent, } from 'react';

class Son1 extends PureComponent {
	render() {
		console.log('渲染了son1')
		return (
				<div>
					这是son1
				</div>
		);
	}
}

export default Son1;
