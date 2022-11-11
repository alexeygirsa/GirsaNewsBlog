import {links} from "../../constants/links"


function NewsMenu({ active, setActive, setCategory }) {

    

    function onClick(id, value) {
        setActive(id)
        setCategory(value)
    }

    return (
        <nav className="menu">
            <ul>
                {links.map(link => (
                    <li
                        key={link.id}
                        className={active === link.id ? "active" : "inactive"}
                        onClick={() => onClick(link.id, link.value)}
                    >
                        {link.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NewsMenu