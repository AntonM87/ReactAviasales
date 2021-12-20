import SortSelectionPanel from '../SortSelectionPanel/SortSelectionPanel';
import Item from '../Item/Item'
import './ListItem.css';

export default function ListItem(props) {

    // const { tickets } = props;
    const { tickets, handlerGetMoreTickets } = props;

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
            <ShowMoreFragmetn
                handlerGetMoreTickets={handlerGetMoreTickets}
            />
        </div>
    )
}

function ShowMoreFragmetn(props) {
    const { handlerGetMoreTickets } = props;
    return (
        <>
            <button
                onClick={() => { handlerGetMoreTickets() }}
                className='showMore'>Показать еще 5 билетов</button>
        </>
    )
}