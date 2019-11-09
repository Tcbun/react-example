import React,{ useState,useEffect } from 'react';
import './index.scss';
import { CSSTransition } from "react-transition-group";

function ReactTransitionGroup() {
    const [ifShow,setIfShow] = useState(false);
    return (
        <div className="animate">
            <div className="parent" onClick={()=> setIfShow(ifShow=>!ifShow)}>父级</div>
            <CSSTransition
            in={ifShow}
            timeout={1000}
            classNames="example"
            unmountOnExit
            onEnter={()=>setIfShow(true)}
            onExited={()=>setIfShow(false)}
            >
                <div className="children">子级</div>
            </CSSTransition>
        </div>
    )
}

export default ReactTransitionGroup;
