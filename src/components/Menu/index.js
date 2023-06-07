import { useState } from "react"

function Menu() {
    const [selected, setSelected] = useState(null)
    function handleChange(event) {
        setSelected(event.target.value)
    }
    return <div>
        <ul>
            <li>ON</li>
            <li>ONA</li>
        </ul>
    </div>
}

export default Menu