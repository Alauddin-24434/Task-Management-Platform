/* eslint-disable react/prop-types */

import { Draggable } from 'react-beautiful-dnd';

const TaskItem = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="task-item"
        >
          <h4>{task?.title}</h4>
          <p>{task?.description}</p>
          {/* Additional task details */}
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
