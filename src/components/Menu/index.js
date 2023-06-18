import { useState } from "react"

function Menu({ open }) {
    if (!open) {
        return null
    }
    return <div>
        <ul>
            <li>ON</li>
            <li>ONA</li>
        </ul>
    </div>
}

export default Menu