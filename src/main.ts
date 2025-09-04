import { InventoryWithSingleton } from "./class/singleton";
import { InventoryAdapter, OldInventory } from "./class/adapter";
import { Device, Support } from "./class/observer";
import { DeviceFactory } from "./class/factoryMethod";

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


const factory = new DeviceFactory();
const notebook = factory.createDevice("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.getDetails());
const desktop = factory.createDevice("Desktop", "HP Pavilion", "32GB", "i9");
console.log(desktop.getDetails());
const server = factory.createDevice("Server", "Dell PowerEdge", "64GB", "Xeon");
console.log(server.getDetails());
//----Uso de Inventory adapter ----

console.log("\ninventario adaptativo");
const oldInventory = new OldInventory();
const adapter = new InventoryAdapter(oldInventory);
adapter.addDevice("Laptop", "Electronics", "available", "Dell XPS 13", 16, 512, "Intel i7");
adapter.addDevice("Projector", "Electronics", "under repair", "Epson X500", 8, 256, "ARM Cortex");
console.log(adapter.listDevices());

// --- Uso de Observer ---

const support = new Support();
const device = new Device("HP Notebook", "Laptop", "available");

device.addObserver(support);
device.changeStatus("under repair");
