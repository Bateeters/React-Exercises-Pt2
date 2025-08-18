import { useState } from "react";
import '../css/Accordion.css'

function Accordion() {

    const accordionSections = [
        {title: "Section 1", content: "Section 1 content here."},
        {title: "Section 2", content: "Section 2 content here."},
        {title: "Section 3", content: "Section 3 content here."},
        {title: "Section 4", content: "Section 4 content here."},
    ]

    const [accordionSelection, setAccordionSelection] = useState(null)

    function Toggle(id) {
        setAccordionSelection( prev => (prev === id ? null : id));
    }

    return (
        <div>
            <h3>7. Accordion</h3>
            <h5>Goal: Expand/collapse content sections.</h5>
            <p>Steps:</p>
            <ol>
                <li>Create a component called Accordion.</li>
                <li>Define an array of sections (title + content)</li>
                <li>Use state to track which section is open.</li>
                <li>Render each title with a toggle button.</li>
                <li>Show content only if section is open.</li>
                <li>Ensure only one section opens at a time.</li>
            </ol>
            <br />
            <p>Exercise Solution:</p>
            <div>
                {accordionSections.map((section, id) => (
                    <div>
                        <button
                        key={id}
                        onClick={() => Toggle(id)}
                        className="w-100 text-start"
                        >
                            <h3>{section.title}</h3>
                        </button>
                        <p className={accordionSelection === id ? "selected" : "d-none"}>{section.content}</p>
                    </div>
                ))}
            </div>
            <br /><br />

        </div>
    )
}

export default Accordion