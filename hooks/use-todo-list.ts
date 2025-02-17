import { useState, useCallback } from "react";
import { Item } from "@/types";
import { items } from "@/app/data/items";

export function useTodoList() {
  const [lists, setLists] = useState<{
    mainList: Item[];
    fruitList: Item[];
    vegetableList: Item[];
  }>({
    mainList: [...items],
    fruitList: [],
    vegetableList: [],
  });

  const moveItemToCategory = useCallback((item: Item) => {
    setLists((currentLists) => {
      // Extract the selected item from the main list
      const newMainList = currentLists.mainList.filter(
        (i) => i.name !== item.name
      );

      // Create new lists with the selected item added to the appropriate category
      const newLists = {
        ...currentLists,
        mainList: newMainList,
        fruitList:
          item.type === "Fruit"
            ? [...currentLists.fruitList, item]
            : currentLists.fruitList,
        vegetableList:
          item.type === "Vegetable"
            ? [...currentLists.vegetableList, item]
            : currentLists.vegetableList,
      };
      return newLists;
    });

    // Move back after 5 seconds
    setTimeout(() => {
      setLists((currentLists) => ({
        mainList: [...currentLists.mainList, item],
        fruitList: currentLists.fruitList.filter((i) => i.name !== item.name),
        vegetableList: currentLists.vegetableList.filter(
          (i) => i.name !== item.name
        ),
      }));
    }, 5000);
  }, []);

  const moveBackToMain = useCallback((item: Item) => {
    setLists((currentLists) => ({
      mainList: [...currentLists.mainList, item],
      fruitList: currentLists.fruitList.filter((i) => i.name !== item.name),
      vegetableList: currentLists.vegetableList.filter(
        (i) => i.name !== item.name
      ),
    }));
  }, []);

  return {
    lists,
    moveItemToCategory,
    moveBackToMain,
  };
}
