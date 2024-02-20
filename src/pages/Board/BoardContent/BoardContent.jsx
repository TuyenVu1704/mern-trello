import ListColumns from './ListColumns/ListColumns';
import Box from '@mui/material/Box';
import { mapOrder } from '~/utils/sort';
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import Columns from './ListColumns/Columns/Columns';
import Cards from './ListColumns/Columns/ListCards/Cards/Cards';

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD',
};

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      delay: 250,
      tolerance: 100,
    },
  });
  const sensors = useSensors(pointerSensor, mouseSensor, touchSensor);
  // Dùng để lấy lại data sau khi được kéo thả
  const [orderedColumnsState, setOrderedColumnsState] = useState([]);
  // Dùng để xác định phần tử được ID kéo là column hay card
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  // Dùng để xác định phần tử được kiểu kéo là column hay card
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  // Dùng để xác định phần tử được kiểu kéo là column hay card
  const [activeDragItemData, setActiveDragItemData] = useState(null);

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      '_id'
    );
    setOrderedColumnsState(orderedColumns);
  }, [board]);

  // Khi bắt đầu kéo 1 phần tử
  const handleDragStart = (event) => {
    console.log('handleDragStart', event);
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  // Khi kết thúc hành động kéo 1 phần tử
  const handleDragEnd = (event) => {
    console.log('handleDragEnd', event);
    const { active, over } = event;
    // Kiểm tra nếu di chuột trả về vị trí over là null thì trả về return rỗng
    if (!over) return;

    // Kiểm tra vị trí sau khi kéo thẻ khác vị trí ban đầu
    if (active.id !== over.id) {
      // Lấy vị trí cũ và mới của column
      const oldIndex = orderedColumnsState.findIndex(
        (c) => c._id === active.id
      );
      const newIndex = orderedColumnsState.findIndex((c) => c._id === over.id);
      // Dùng arrayMove để sắp xếp lại các mảng ban đầu
      const dndOrderedColumns = arrayMove(
        orderedColumnsState,
        oldIndex,
        newIndex
      );
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);

      // Cập nhật lại mảng ban đầu sau khi kéo thả
      setOrderedColumnsState(dndOrderedColumns);
      setActiveDragItemId(null);
      setActiveDragItemType(null);
      setActiveDragItemData(null);
    }
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#636e72' : '#1976d2',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          p: '10px',
        }}
      >
        <ListColumns columns={orderedColumnsState} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
              <Columns column={activeDragItemData} />
            )}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
              <Cards card={activeDragItemData} />
            )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
