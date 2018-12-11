import React,{Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

import Collapsible from '../../../node_modules/react-collapsible';

const cx = classNames.bind(styles);

class TodoItem extends Component{
    render(){
        const {done,children,onToggle,onRemove} =this.props;

        return(
            <div>
            <input type="checkbox"></input>
                <Collapsible trigger={children}>
                    <div className={cx('todo-item')} onClick={onToggle}>
                        <input className={cx('tick')} type='checkbox' checked={done} readOnly/>
                        <div className={cx('text',{done})}>{children} 입니다.</div>
                        <div className={cx('delete')} onClick={(e) => {
                            onRemove();
                            e.stopPropagation();
                        }
                        }>[지우기]</div>
                    </div>
                

                </Collapsible>
            </div>
            
        );
    }
}

export default TodoItem;