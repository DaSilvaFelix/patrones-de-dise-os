import { InventoryWithSingleton } from "./class/singleton";
import { InventoryWithFactory } from "./class/factoryMethod";
import { InventoryWithObserver, electronicProduct } from "./class/observer";
// --- Uso de InventoryWithSingleton ---

const inventory = InventoryWithSingleton.getInstance();
inventory.addItem({
  name: "Laptop",
  type: "Electronics",
  status: "available",
  marker: "Dell XPS 13",
});
inventory.addItem({
  name: "Projector",
  type: "Electronics",
  status: "under repair",
  marker: "Epson X500",
});
inventory.addItem({
  name: "Whiteboard",
  type: "Office Supplies",
  status: "available",
  marker: "Magnetic Whiteboard",
});

console.log("inventario con singleton");
console.log(inventory.getItems());

// --- Uso de InventoryWithFactory ---

console.log("inventario con factory method");
const store = new InventoryWithFactory();
const laptop = store.createItem(
  "electronic",
  "Laptop",
  "available",
  "Dell XPS 13",
  16,
  512,
  "Intel i7"
);
store.addItem(laptop.details());
const chocolate = store.createItem(
  "consumable",
  "Chocolate Bar",
  "available",
  "Lindt Excellence"
);
store.addItem(chocolate.details());
console.log(store.getItems());

//----Uso de InventoryWithObserver ----

console.log("inventario con observer");
const inventoryObserver = new InventoryWithObserver();
const electronic1 = new electronicProduct(
  "Laptop",
  "Electronics",
  "available",
  "Dell XPS 13",
  16,
  512,
  "Intel i7"
);
const electronic2 = new electronicProduct(
  "Projector",
  "Electronics",
  "under repair",
  "Epson X500",
  0,
  0,
  ""
);
inventoryObserver.addObserver(electronic1);
inventoryObserver.addObserver(electronic2);
console.log(inventoryObserver.getItems());
inventoryObserver.updateStatus("Laptop", "under repair");
inventoryObserver.updateStatus("Projector", "available");
console.log(inventoryObserver.getItems());


