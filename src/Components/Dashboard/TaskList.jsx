/* eslint-disable react/prop-types */

import { Droppable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';


const TaskList = ({ title, tasks }) => {
  return (
    <div className="task-list">
      <h3>{title}</h3>
      <Droppable droppableId={title.toLowerCase()}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks?.map((task, index) => (
              <TaskItem key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
