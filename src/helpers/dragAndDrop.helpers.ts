import Sortable from "sortablejs";
import { updateTodosOrder } from "../stores/todo.store";

export function dragAndDrop(element: Element) {
  Sortable.create(element as HTMLElement, {
    onEnd(event) {
      if (event.oldIndex !== undefined && event.newIndex !== undefined) {
        updateTodosOrder(event.oldIndex, event.newIndex);
      }
    },
  });
}
