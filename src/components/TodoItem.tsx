// import styles from "./TodoItem.module.css";
// import Todo from "../models/todo";

// interface TodoItemProps {
//   items: Todo[];
// }

// const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
//   const deleteHandler =
//     (itemID: string) => (event: React.MouseEvent<Element, MouseEvent>) => {
//       event.preventDefault();

//       const listItem = event.currentTarget.parentElement?.parentElement;
//       if (listItem) {
//         listItem.remove();
//       }

//       console.log(itemID);
//     };

//   return (
//     <>
//       <ul className={styles.list}>
//         {props.items.map((item) => (
//           <li className={styles.item} key={item.id}>
//             <div>
//               <input className={styles.checkbox} type="checkbox"></input>
//               <del>
//                 {item.status}
//                 {item.text}
//               </del>
//             </div>

//             <div>
//               <button
//                 className={styles.itemButton}
//                 onClick={(event: React.MouseEvent<Element, MouseEvent>) =>
//                   deleteHandler(item.id)(event)
//                 }
//               >
//                 delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default TodoItem;

import React, { useState } from "react";
import styles from "./TodoItem.module.css";
import Todo from "../models/todo";

interface TodoItemProps {
  items: Todo[];
}

const TodoItem: React.FC<TodoItemProps> = ({ items }: TodoItemProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleCheckbox = (itemId: string) => {
    setCheckedItems((prevChecked) =>
      prevChecked.includes(itemId)
        ? prevChecked.filter((id) => id !== itemId)
        : [...prevChecked, itemId]
    );
  };

  const deleteHandler = (itemID: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(itemID);
  };

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li className={styles.item} key={item.id}>
          <div>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={checkedItems.includes(item.id)}
              onChange={() => toggleCheckbox(item.id)}
            />
            <p
              style={{
                textDecoration: checkedItems.includes(item.id)
                  ? "line-through"
                  : "none",
              }}
            >
              {item.text}
            </p>
          </div>
          <div>
            <button
              className={styles.itemButton}
              onClick={(event: React.MouseEvent) =>
                deleteHandler(item.id)(event)
              }
            >
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
