import './SortSelection.css'
export default function SortSelection(props) {
    const { radioSelectHandler } = props;
    return (
        <div className='main__selected__container'>
            <div>Количество пересадок</div>
            <form onChange={(e) => { radioSelectHandler(e) }}>
                <label>
                    <input defaultChecked={true} type='radio' value='0' name='lefSelectPanel' />
                    <span className='checkBox'></span>
                    <p>Все</p>
                </label>
                <label>
                    <input type='radio' value="1" name='lefSelectPanel' />
                    <span className='checkBox'></span>
                    <p>Без пересадок</p>
                </label>
                <label>
                    <input type='radio' value="2" name='lefSelectPanel' />
                    <span className='checkBox'></span>
                    <p>1 пересадка</p>
                </label>
                <label>
                    <input type='radio' value="3" name='lefSelectPanel' />
                    <span className='checkBox'></span>
                    <p>2 пересадки</p>
                </label>
                <label>
                    <input type='radio' value="4" name='lefSelectPanel' />
                    <span className='checkBox'></span>
                    <p>3 пересадки</p>
                </label>
            </form>
        </div>
    )
}