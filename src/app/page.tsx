'use client';
import React from 'react';
import { Row, Col} from 'antd';
import ToDoList from "@/components/ToDoList";
import {getCommonCol} from "@/util";
export default function Home() {
    const colConfig=getCommonCol(8, 8);
  return (
    <main className="pd32">
        <div className="toDoBg" />
        <Row>
            <Col {...colConfig}>
              <h1 style={{color:'#fff', padding:"32px 0"}}>
                  {"TODO"}
              </h1>
              <ToDoList />
            </Col>
        </Row>
    </main>
  );
}
