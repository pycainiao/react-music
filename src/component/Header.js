import React from 'react';
import {Link } from "react-router-dom";

function BaseHeader(props) {
	return (
			<div>这是头部搜索部分
				<Link to="/recommend">推荐</Link>
				<Link to="/singers">歌手</Link>
				<Link to="/rank">排行榜</Link>
			</div>
	);
}

export default BaseHeader;
