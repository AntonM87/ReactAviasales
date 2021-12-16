import './SortSelectionPanel.css'

export default function SortSelectionPanel() {
    return (
        <div className="sort__selection__panel">

            <input defaultChecked name="sort_selection_panel" type='radio' id="slowly" value='slowly' />
            <label htmlFor='slowly'>Самый дешевый</label>

            <input name="sort_selection_panel" type='radio' id="fast" value='fast' />
            <label htmlFor='fast'>Самый быстрый</label>

            <input name="sort_selection_panel" type='radio' id="optimal" value='optimal' />
            <label htmlFor='optimal'>Оптимальный</label>

        </div>
    )
}