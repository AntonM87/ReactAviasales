import './item.css'
export default function Item(props) {

    const { ticket } = props

    return (
        <li>
            <div>
                <div>
                    <span><p>{ticket[1].price}</p></span>
                    <div className='logo'>{ticket[1].carrier}</div>
                </div>
                <span>Airlines</span>
            </div>
            <div>
                <div>
                    <span><p>{ticket[1].price}</p></span>
                    <div className='logo'>{ticket[1].carrier}</div>
                </div>
                <span>Airlines</span>
            </div>
            <div>
                <div>
                    <span><p>{ticket[1].price}</p></span>
                    <div className='logo'>{ticket[1].carrier}</div>
                </div>
                <span>Airlines</span>
            </div>
        </li>
    )
}