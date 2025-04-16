class Furniture:
    def __init__(self, material, width, height, depth, amount=1):
        self._material = material
        self._width = width
        self._height = height
        self._depth = depth
        self._amount = amount

    def __str__(self):
        return (f"Material: {self._material}, Width: {self._width}, Height: {self._height}, "
                f"Depth: {self._depth}, Amount: {self._amount}")


class Table(Furniture):
    def __str__(self):
        return f"Table: {super().__str__()}"

class Chair(Furniture):
    def __str__(self):
        return f"Chair: {super().__str__()}"

class ChestOfDrawers(Furniture):
    def __init__(self, drawers, **kwargs):
        super().__init__(**kwargs)
        self._drawers = drawers

    def __str__(self):
        return f"Chest of Drawers: {super().__str__()}, Drawers: {self._drawers}"

class ShelfCabinet(Furniture):
    def __init__(self, shelves, **kwargs):
        super().__init__(**kwargs)
        self._shelves = shelves

    def __str__(self):
        return f"Shelf Cabinet: {super().__str__()}, Shelves: {self._shelves}"

class Factory:
    def __init__(self):
        self._furniture_types = {
            "table": Table,
            "chair": Chair,
            "chest of drawers": ChestOfDrawers,
            "shelf cabinet": ShelfCabinet
        }

    def make(self, furniture, **kwargs):
        furniture_class = self._furniture_types.get(furniture)
        if not furniture_class:
            raise ValueError("Neplatný typ nábytku")
        return furniture_class(**kwargs)

factory = Factory()

chest = factory.make(
    furniture="chest of drawers",
    material="oak",
    width=90,
    height=180,
    depth=60,
    amount=4,
    drawers=3
)
print(chest)

table = factory.make(
    furniture="table",
    material="oak",
    width=70,
    height=75,
    depth=130
)
print(table)
