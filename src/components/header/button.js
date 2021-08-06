import './button.css'

export default function Button({label, onclick, classname}) {

    return (
        <div>
            <div className="button" onClick={onclick}>
                <p>{label}</p>
            </div>
        </div>
    )
}