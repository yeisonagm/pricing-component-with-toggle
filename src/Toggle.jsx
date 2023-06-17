import './Toggle.css'

export function Toggle({ onToggle }) {
    return (
        <div className="wrap-toggle">
            <input type="checkbox"
                id="checkbox-toggle"
                className='checkbox-toggle'
                onChange={() => { onToggle() }} />
            <label htmlFor="checkbox-toggle"
                className='switch'></label>
        </div>
    );
}