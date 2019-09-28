import './Header.scss';


import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

/**
 * @constructor <Header />
 * @description 顶部banner
 */

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="header">
                <SearchBar />
                <img className="banner-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569671833871&di=b60100aee338792d7dd4c4c4ffd92bdf&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-7%2F201707281705397633650.png"/>
            </div>
        );
    }
}

export default Header;