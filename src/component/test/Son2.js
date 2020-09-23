/*
author: nong
time: 2020-39-23 17:39:17
function: 测试下边forwardRef  useImperativeHandle 等东西
*/
import React,{ forwardRef,useImperativeHandle,useRef,useState,useEffect  } from 'react';

const Son2 =  forwardRef((props,ref) => {
	const [name,setName] = useState('init')
	const [count,setCount] = useState('init')
	console.log('渲染了son2')
	const son2Ref = useRef();
	const son2RefFc = () => {
		console.log(111, '这是son2')
	}
	function getProductName() {
		console.log('getProductName触发')
		return name
	}
	// 只对name响应
	useEffect(() => {
		console.log('name effect 触发')
		getProductName()
	}, [name])
	useEffect(() => {
		console.log('只对count响应')
	},[count])
	useImperativeHandle(ref,() => {
			return {
				zidying: '1111',
				son2RefFc: son2RefFc
			}
	})
	return (
			<div>
				<p>{getProductName()}</p>
				<div>name: {name}</div>
				<div>count: {count}</div>
				<button onClick={() => setName(name+1)} >修改name</button>;
				<button onClick={() => setCount(count+1)} >count修改</button>;
				<div ref={son2Ref}>	这是son2</div>
			</div>
	);
})

export default React.memo(Son2);
