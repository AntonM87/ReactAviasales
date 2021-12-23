import './item.css'
export default function Item(props) {

    const { ticket } = props

    // туда ticket[1].segments[0]

    return (
        <li className='ticket__item'>
            <div className='ticket__price__logo'>
                <span>
                    <p>{addSpace(toString(ticket[1].price))} Р</p>
                </span>
                <div className='logo'>
                    <span>{ticket[1].carrier}</span>
                    <span>Airlines</span>
                </div>
            </div>
            <div className='content__row__container'>
                {
                    ticket[1].segments.map((row, i) => {
                        return <ContentRowFragment segment={row} key={i} />
                    })
                }
            </div>
        </li>
    )
}

function ContentRowFragment(props) {

    const { segment } = props

    const origin = segment.origin; //откуда (для лейбла)
    const destination = segment.destination //куда (для лейбла)

    const duration__hours = Math.floor(segment.duration / 60); //часов
    const duration_minutes = segment.duration - (duration__hours * 60); // минут

    const trasferList = segment.stops; // список пересадок
    const stops = segment.stops.length // количество пересадок

    const time_origin = segment.date.match(/([0-9][0-9]):([0-9][0-9])/g)[0]; // время отбытия

    const objHourse_Minutes = getObjHourse_Minutes(segment.date, segment.duration) // объект времени прибытия

    return (
        <>
            <div className='content__row'>
                <div className='target__path'>
                    <div>
                        {`${origin} - ${destination}`}
                    </div>
                    <div>
                        {`${time_origin} - ${concatPrevNull(objHourse_Minutes.hourse)}:${concatPrevNull(objHourse_Minutes.minutes)}`}
                    </div>
                </div>
                <div className='path__time'>
                    <div>
                        В пути
                    </div>
                    <div>
                        {`${duration__hours}ч ${duration_minutes}мин`}
                    </div>
                </div>
                <div className='transfers'>
                    <div>
                        {transferCounterValidtin(stops)}
                    </div>
                    <div>
                        {trasferList.map(val => {
                            return `${val},`
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

// получить объект с минутами и часа на основе время отлета и продолжительности времени
function getObjHourse_Minutes(date, duration) {
    const start = Date.parse(date);
    const durationFly = duration * 60 * 1000;
    const end = new Date(start + durationFly);
    const hourse = end.getHours();
    const minutes = end.getMinutes();
    return {
        hourse,
        minutes
    }
}

function addSpace(price) {
    if (price.length === 5) {
        const start = price.slice(0, 2);
        const end = price.slice(2);
        const result = '';
        return result.concat(start, ' ', end,);
    }
    else if (price.length === 4) {
        const start = price.slice(0, 1);
        const end = price.slice(1);
        const result = '';
        return result.concat(start, ' ', end,);
    }
}

function toString(val) {
    return val + '';
}

function transferCounterValidtin(arr_length) {
    switch (arr_length) {
        case 0:
            return "Без пересадок"
            break;
        case 1:
            return "Пересадка"
            break;
        case 2:
            return "Пересадки"
            break;

        case 3:
            return "Пересадки"
            break;

        case 4:
            return "Пересадки"
            break;

        case 5:
            return "Пересадок"
            break;
        default:
            return "Пересадок"
            break;
    }
}
function concatPrevNull(val) {
    if (val >= 0 && val <= 9) {
        return `0${val}`;
    }
    return val
}