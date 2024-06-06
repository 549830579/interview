import React, { useState } from 'react';
import AddToDo from "@/components/ToDoList/AddToDo";
import ToDoItem, {listItem} from "@/components/ToDoList/ListItem";
import {List} from 'antd';

const ToDoList: React.FC = () => {
    const [list, setList] = useState<listItem[]>([]);

  function addToDoList(value:listItem){
      setList([
          value,
          ...list,
      ])
  }

  function onCompleteChange(id?:number){
      const newList=list.map(item=>{
          return {
              ...item,
              completed:item.id===id?!item.completed:item.completed
          }
      })
      setList(newList)
  }

  function completeAll(){
      const newList=list.map(item=>{
          return {
              ...item,
              completed:true
          }
      })
      setList(newList)
  }

  function clearComplete(){
      const newList=list.map(item=>{
          return {
              ...item,
              completed:false
          }
      })
      setList(newList)
  }

  function showRenderItem(item:listItem){
      return <List.Item>
          <div style={{width:'100%'}} className="pointer" onClick={()=>onCompleteChange(item.id)}>
              <ToDoItem
                  readOnly
                  variant="borderless"
                  key={item.id}
                  value={item}
              />
          </div>
      </List.Item>
  }

  const leftCount=list.filter(item=>!item.completed);
  const shouldShowList=list.length>0;
  return (
      <div className="pd8 mt32">
          <AddToDo
              onChange={addToDoList}
          />
          {shouldShowList&&<div className="mt16 hoverCard">
              <List
                  bordered
                  itemLayout="horizontal"
                  dataSource={list}
                  renderItem={showRenderItem}
                  footer={
                    <div className="flexBetween toDoFooter">
                           <div>{leftCount.length} items left</div>
                           <div><a onClick={completeAll}>All Active Completed</a></div>
                           <div><a onClick={clearComplete}>Clear Completed</a></div>
                    </div>
                  }
              />
          </div>}
      </div>
  );
}

export default ToDoList;
