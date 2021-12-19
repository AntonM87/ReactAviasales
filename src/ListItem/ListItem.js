import SortSelectionPanel from '../SortSelectionPanel/SortSelectionPanel';
import Item from '../Item/Item'
import './ListItem.css';

export default function ListItem(props) {

    const { tickets } = props;

    return (
        <div className='listItemContainer'>
            <SortSelectionPanel />
            <ul className='main__content__container'>
                {
                    tickets.map((ticket, i) => {
                        return <Item key={i} ticket={ticket} />
                    })
                }
            </ul>
            <ShowMoreFragmetn />
        </div>
    )
}

function ShowMoreFragmetn(props) {
    return (
        <>
            <button className='showMore'>Показать еще 5 билетов</button>
        </>
    )
}