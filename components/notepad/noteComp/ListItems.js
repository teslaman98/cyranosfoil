import React from 'react';
import appStyles from  '../../../styles/notepad/app.module.css';


function ListItems(props){
    const items = props.items;
    const ListItems = items.map(item =>
        {
            return <div className={appStyles.list} key={item.key}>
                <p className={appStyles.listp}>{item.text}
                <span>
                    <div className={appStyles.faicons}
                    onClick={ () => props.deleteItem(item.key)
                    }
                    >x</div>
                </span>
                </p>
            </div>
        })
    return(
    <div>{ListItems}</div>
    )
}
export default ListItems;
