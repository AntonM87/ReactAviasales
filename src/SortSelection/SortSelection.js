import './SortSelection.css'
export default function SortSelection() {
    return (
        <div className='main__selected__container'>
            <div>Количество пересадок</div>
            <form>
                <label>
                    <input defaultChecked={true} type='checkbox' name="all" />
                    <span className='checkBox'></span>
                    <p>Все</p>
                </label>
                <label>
                    <input type='checkbox' name="notDirect" />
                    <span className='checkBox'></span>
                    <p>Без пересадок</p>
                </label>
                <label>
                    <input type='checkbox' name="one" />
                    <span className='checkBox'></span>
                    <p>1 пересадка</p>
                </label>
                <label>
                    <input type='checkbox' name="two" />
                    <span className='checkBox'></span>
                    <p>2 пересадки</p>
                </label>
                <label>
                    <input type='checkbox' name="three" />
                    <span className='checkBox'></span>
                    <p>3 пересадки</p>
                </label>
            </form>
        </div>
    )
}