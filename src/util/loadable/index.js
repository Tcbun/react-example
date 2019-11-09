import React from 'react';
import Loadable from 'react-loadable';

const loadingComponent = () => {
    return (
        <div>我正在加载哦哦哦哦哦哦哦哦！</div>
    )
}

export default ((loader,loading = loadingComponent) => {
    return Loadable({
        loader,
        loading
    })
})