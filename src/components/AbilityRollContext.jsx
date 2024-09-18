import React from 'react'

const AbilityRollContext = ({
    rightClickItem,
    positionX,
    positionY,
    isToggled,
    buttons,
    contextMenuRef
}) => {
  return (
    <menu
    style={{
        top: positionY + 2 + "px",
        left: positionX + 2 + "px"
    }}
     className={`context-menu ${isToggled ? 'active' : ''}`}
     ref={contextMenuRef}
    >
        {buttons.map((button, index) => {
            function handleClick(e) {
                e.stopPropogation()
                button.onClick(e, rightClickItem)
            }

            if (button.isSpacer) return <hr key={index}></hr>

            return (
                <button onClick={handleClick} key={index}>
                    <span>{button.text}</span>
                </button>
            )
        })}
    </menu>
  )
}

export default AbilityRollContext