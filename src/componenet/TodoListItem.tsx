import React, { useState } from "react";
import {TodoItem}  from '../screens/Project1'

interface TodoListItemProps{
    text : string;
    completed : boolean;
    id : number;
    onClickDelete(id:number): void;
    onClickUpdate (updatedTodoItem : TodoItem ): void;
    
    
}

export default function TodoListItem({id,text, completed, onClickDelete,onClickUpdate } : TodoListItemProps){
    const [isUpdating,setIsUpdating] = useState<boolean>(false)
    const [updateText,setUpdateText] = useState<string>('')
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateText(event.target.value)
    }

    const handleformsubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedTodoItem = {
            id : id,
            text: updateText,
            completed : completed
        }
        onClickUpdate(updatedTodoItem)
        setIsUpdating(false);
    };

   

    return (
        <div>
        {!isUpdating ?(
        <li className="todoContainer">
            {completed? <button>완료됨</button> : <button>완료하기</button>}
            <p>{text}</p>
            <div className="buttonContainer">
                <button onClick={() => setIsUpdating(true)}>수정</button>
                <button onClick={() => onClickDelete(id)}>삭제</button>
            </div>
        </li>
       )  : (
            <li className="todoContainer">
            <form onSubmit={handleformsubmit}>
            <input onChange={handleInputChange} type="text" className='TodoInsert' placeholder='할일을 입력하세요' value={updateText}></input>
            <button >클릭</button>
            </form>
            </li>
       )}
       </div>
    )
}