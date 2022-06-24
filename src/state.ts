export const state = {
  data: {
    list: [],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    // modifica this.data (el state) e invoca los callbacks
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },
  subscribe(callback: (any) => any) {
    // recibe callbacks para ser avisados posteriormente
    this.listeners.push(callback);
  },
  addItem(item) {
    // suma el nuevo item a la lista
    const lastState = this.getState();
    lastState.list.push(item);
    this.setState(lastState);
  },
};
