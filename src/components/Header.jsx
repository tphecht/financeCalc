import reactLogo from '../assets/react.svg'
export default function Header() {
    return (
        <header className="header">
            <img
                src={reactLogo}
                className="header--image"
            />
            <h2 className="header--title">Finance Calculator</h2>
        </header>
    )
}