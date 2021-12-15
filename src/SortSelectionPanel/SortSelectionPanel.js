import './SortSelectionPanel.css'

export default function SortSelectionPanel() {
    return (
        <form>
            <div className="sort__selection__panel">

                <input checked='checked' name="sort_selection_panel" type='radio' id="slowly" value='slowly' />
                <label for='slowly'>Самый дешевый</label>

                <input name="sort_selection_panel" type='radio' id="fast" value='fast' />
                <label for='fast'>Самый быстрый</label>
                
                <input name="sort_selection_panel" type='radio' id="optimal" value='optimal' />
                <label for='optimal'>Оптимальный</label>
                
            </div>
        </form>
    )
}