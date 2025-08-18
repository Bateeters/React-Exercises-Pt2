import { useState } from "react"

function Tabs({tabs}) {
    const defaultTabs = [
        {label: "tab1", content: "tab1 content"},
        {label: "tab2", content: "tab2 content"},
        {label: "tab3", content: "tab3 content"},
    ]

    const hasCustomTabs = tabs && tabs.length > 0
    const customTabs = hasCustomTabs? tabs: defaultTabs

    const [tabIndex, setTabIndex] = useState(0);

    return(
        <div>
            {/* Checking to see if a custom tabs array was passed */}
            {!hasCustomTabs && ( /* If not, display the following */
                <div>
                    <h3>6. Tabs Component</h3>
                    <h5>Goal: Create a tabbed interface.</h5>
                    <p>Steps:</p>
                    <ol>
                        <li>Create a new component called Tabs.</li>
                        <li>Define an array of tabs (objects with label and content).</li>
                        <li>Track active tab index with useState(0).</li>
                        <li>Render tab headers as buttons.</li>
                        <li>Highlight the active tab.</li>
                        <li>Display the content of the active tab.</li>
                    </ol>
                    <br />
                    <p>Exercise Solution:</p>
                </div>
            )}
            
            <div style={{display: "flex"}}>
            {customTabs.map((tab, id) => (
                    <button
                    style={{marginRight: "15px"}}
                    key={id}
                    onClick={() => setTabIndex(id)}>
                        {tab.label}
                    </button>
            ))}
            </div>

            <div>
                <div>{customTabs[tabIndex].content}</div>
                <div>{customTabs.id}</div>
            </div>
            <br /><br />

        </div>
    )
}

export default Tabs