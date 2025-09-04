export interface ObserverProduct {
     update(name: string, status: "available" | "unavailable" | "under repair"): void
}
