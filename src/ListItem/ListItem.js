import SortSelectionPanel from '../SortSelectionPanel/SortSelectionPanel';
import Item from '../Item/Item'
import './ListItem.css';

export default function ListItem(props) {

    const { tickets } = props;

    return (
        <div>
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
            <button>Показать еще 5 билетов</button>
        </>
    )
}