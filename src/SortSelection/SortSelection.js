import './SortSelection.css'
export default function SortSelection() {
    return (
        <div className='main__selected__container'>
            <span>Количество пересадок</span>
            <form>
                <div>
                    <input type='checkbox' name="all" id="all" />
                    <label htmlFor='all'>Все</label>
                </div>
                <div>
                    {/* без пересадок */}
                    <input type='checkbox' name="notDirect" id="notDirect" />
                    <label htmlFor='notDirect'>Без пересадок</label>
                </div>
                <div>
                    <input type='checkbox' name="one" id="one" />
                    <label htmlFor='one'>1 пересадка</label>
                </div>
                <div>
                    <input type='checkbox' name="two" id="two" />
                    <label htmlFor='two'>2 пересадки</label>
                </div>
                <div>
                    <input type='checkbox' name="three" id="three" />
                    <label htmlFor='three'>3 пересадки</label>
                </div>
            </form>
        </div>
    )
}