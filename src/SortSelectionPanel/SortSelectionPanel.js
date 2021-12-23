import './SortSelectionPanel.css'

export default function SortSelectionPanel(props) {
    const { handlerSelectSort } = props;

    return (
        <div className="sort__selection__panel">

            <input defaultChecked name="sort_selection_panel" type='radio' id="inexpensive" />
            <label onClick={(e) => { handlerSelectSort(e) }} className='inexpensive' htmlFor='inexpensive'>Самый дешевый</label>

            <input name="sort_selection_panel" type='radio' id="fast" />
            <label onClick={(e) => { handlerSelectSort(e) }} className='fast' htmlFor='fast'>Самый быстрый</label>

            <input name="sort_selection_panel" type='radio' id="optimal" />
            <label onClick={(e) => { handlerSelectSort(e) }} className='optimal' htmlFor='optimal'>Оптимальный</label>

        </div>
    )
}