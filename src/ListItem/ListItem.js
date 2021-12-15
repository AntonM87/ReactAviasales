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
        </div>
    )
}