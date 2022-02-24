import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;


function Tasks() {
  return (
    <div>
      <Collapse bordered={true} >
          <Panel header="Completed" key="1">
              <p>Assignment 1</p>
          </Panel>
          <Panel header="Due Today" key="2">
              <p>Assignment 1</p>
          </Panel>
          <Panel header="Due Tomorrow" key="3">
              <p>Assignment 1</p>
          </Panel>
          <Panel header="Due This Week" key="4">
              <p>Assignment 1</p>
          </Panel>
          <Panel header="Due Later" key="5">
              <p>Assignment 1</p>
          </Panel>
      </Collapse>
    </div>
  )
}

export default Tasks