import Item from '../Item/Item'

export default function ListItem(props) {

    const { tickets } = props;
    console.log('tickets', tickets);

    return (
        <ul>
            {
                // <Item ticket={tickets[0]} />
                tickets.map((i, ticket) => {
                    if (i >= 25) return;
                    return <Item ticket={ticket} />
                })
            }
        </ul>
    )
}