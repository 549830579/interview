import React from 'react';
import { Input } from "antd";
import { CheckOutlined } from '@ant-design/icons';

export interface listItem {
    value?: string;
    id?: number;
    completed?: boolean;
}

interface Props {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onCompleteChange?: (e: React.MouseEvent) => void;
    readOnly?: boolean;
    variant?:any;
    value?: listItem;
}

const ToDoItem: React.FC<Props> = (props:Props) => {
    const {value={}, onChange, onPressEnter,
        onCompleteChange, readOnly,variant}=props;
    const {value:InputValue, completed}=value;
    const prefix=<div onClick={onCompleteChange} className={`pointer ${completed?"circleCompleted":""} circle`}>
        <CheckOutlined />
    </div>
    return (
        readOnly?<div className="flexRow">
            {prefix}
            <div className={`${completed&&"missionComplete"}`}>{InputValue}</div>
        </div>:<Input
            value={InputValue}
            onChange={onChange}
            size="large"
            placeholder="Create a new todo..."
            prefix={prefix}
            onPressEnter={onPressEnter}
            variant={variant}
        />
    );
}

export default ToDoItem;
