import { useState, useRef, useCallback } from 'react';

// items remove themselves from the array after a delay, e.g. a message queue

const useExpiresArray = (initItems = []) => {
  const [storage, setStorage] = useState(initItems);
  const index = useRef(0);

  const add = (item, delay = 3000) => {
    const newItem = {
      data: item,
      id: index.current++
    };
    newItem.timeoutId = setTimeout(() => {
      return setStorage(prev => prev.filter(item => item.id !== newItem.id));
    }, delay);
    setStorage(prev => [...prev, newItem]);
    return newItem;
  };

  const remove = itemId => {
    const item = storage.find(i => i.id === itemId);
    if (item) {
      clearTimeout(item.timeoutId);
      setStorage(prev => prev.filter(i => i.id !== itemId));
    }
  };

  const clearTimeouts = useCallback(() => storage.forEach(i => clearTimeout(i.timeoutId)), [
    storage
  ]);

  const flush = () => {
    clearTimeouts();
    setStorage([]);
  };

  return {
    items: storage,
    add,
    remove,
    flush,
    count: storage.length
  };
};

export default useExpiresArray;
