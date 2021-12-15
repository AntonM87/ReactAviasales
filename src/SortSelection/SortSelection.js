import './SortSelection.css'
export default function SortSelection() {
    return (
        <div className='main__selected__container'>
            <span>Количество пересадок</span>
            <form>
                <div>
                    <input type='checkbox' name="all" id="all" />
                    <label for='all'>Все</label>
                </div>
                <div>
                    {/* без пересадок */}
                    <input type='checkbox' name="notDirect" id="notDirect" />
                    <label for='notDirect'>Без пересадок</label>
                </div>
                <div>
                    <input type='checkbox' name="one" id="one" />
                    <label for='one'>1 пересадка</label>
                </div>
                <div>
                    <input type='checkbox' name="two" id="two" />
                    <label for='two'>2 пересадки</label>
                </div>
                <div>
                    <input type='checkbox' name="three" id="three" />
                    <label for='three'>3 пересадки</label>
                </div>
            </form>
        </div>
    )
}