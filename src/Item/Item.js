export default function Item(props) {

    const { ticket } = props
    // console.log('ticket', ticket);
    // console.log('ticket', ticket[1].carrier);
    // console.log('ticket', ticket[1].price);
    // console.log('ticket', ticket[1].price);
    // console.log('ticket', ticket[1].carrier)

    return (
        <li>
            <div>
                <div>
                    <p>Цена в рублях: </p>
                    <p>{ticket[1].price}</p>
                </div>
                <span>
                    <p>Код авиакомпании: </p>
                    <p>{ticket[1].carrier}</p>
                </span>
            </div>
        </li>
    )
}