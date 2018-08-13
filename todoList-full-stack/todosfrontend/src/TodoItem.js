import React from "react";

const TodoItem = ({name, completed, onDelete, _id}) => (
    
    <div>
        <li>
            {name}
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