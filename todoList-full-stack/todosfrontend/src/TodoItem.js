import React from "react";

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    
    <div>
        <li>
            <span 
            style={{textDecoration: completed === true ? "line-through" : null}}
            onClick={onToggle}
            >
            {name}
            </span>
            <button 
            type="button"
            className="delete-button"
            onClick={onDelete}
            >
                X
            </button>
        </li>
        
    </div>
)

export default TodoItem;