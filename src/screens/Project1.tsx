import React, { useState } from 'react'
import TodoListItem from '../componenet/TodoListItem';
import { text } from 'stream/consumers';

export type TodoItem = {
    id: number;
    text: string;
    completed:boolean;
}

const Project1: React.FC=  ()  => {
    const [inputtext, setInputtext] = useState("")
    const [todos,setTodos] = useState<TodoItem[]>([
        {
            id: 1,
            text: '리액트 기초 알아보기',
            completed : true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 하기',
            completed: true,
        },
        {
            id: 3,
            text:'투두리스트 만들기',
            completed: false,
        }
    ]);
    // 입력값 변경 확인 함수. input의 값ㄷ이 변경될 때마다 호출되어 값을 변경시킴.
    const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputtext(e.target.value);
      };
    
    // 입력확인 (확인 누르면 리스트에 입력한 값이 추가되는 이벤트)
    // 기능 설명 
    //textInputHandler 
    //(event : React.FormEvent<HTMLFormElement>):void , event값, 폼이벤트 타입 지정, 아무것도 없으니 void지정
    //1.event.preventDefault(); : 다른 페이지로 이동하는 것을 방지한다..
    const textInputHandler = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        // input값을 담을 새로운 배열 생성 id:새로 생성되는것이니 고유성을 가진 수치 아무거나보통 시간이 제일 적당
        const newTodo : TodoItem ={
            id:Date.now(),
            text: inputtext,
            completed:false,
        }
        // 기존의 목록에 ...을 이용해서 기존의 리스트 + 새로운 리스트를 넣는 방식으로 추가
        setTodos([...todos,newTodo])
        // 기존의 input창은 비워두기 
        setInputtext(" ")
    }
    const deleteHandler = (id : number ) => {
         setTodos(todos.filter((todoItem) => todoItem.id !== id))
    }
    const textUpdateHandler = (newTodo : TodoItem): void => {
            const newTodoList = todos.map((item)=>{
                if(item.id === newTodo.id){
                    return newTodo;
                }else{
                    return item
                }
            })
    }
    return (
        <div>
        <h1 className='rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600'>해당 사이트는 할일 목록 만들기 사이트입니다.</h1>
            <div className='TodoListcontanier [w|h]-[1.5]/3 border-8 border-blue-400 bg-emerald-200 bg-center rounded-md '>
                <div className='TodoListtitle'> 
                    <h3>오늘의 할일 목록</h3>
                    <form onSubmit={textInputHandler}>
                    <input onChange={textTypingHandler} type="text" className='TodoInsert' placeholder='할일을 입력하세요' value={inputtext}></input>
                    <button >클릭</button>
                    </form>
                <div className='TodoList' >
                    {todos.map((todo) => (
                        <TodoListItem
                            id={todo.id}
                            text={todo.text}
                            completed = {todo.completed}
                            onClickDelete = {deleteHandler}
                            onClickUpdate = {textUpdateHandler}
                            />
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Project1