export default function TextInput(props) {

    return (
        <>
            <label className="input--label" htmlFor={props.name}>{props.name}</label>
            <div className="dollar">
                <input
                    type="number"
                    placeholder="0.00"
                    onChange={props.onChange}
                    name={props.name}
                    step='0.01'
                    key={props.name}
                    className={props.className}
                />
            </div>
        </>
    )
}