import { useState } from "react";
import AddItem from "./addItem.tsx";
import ListItem from "./listItem.tsx";

function List() {
    const [newList, setNewList] = useState("");
    const [items, setItems] = useState<string[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editValue, setEditValue] = useState("");

    const handleAddItem = () => {
        if (!newList.trim()) return;
        setItems([...items, newList.trim()]);
        setNewList("");
    };

    const handleDelete = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setEditValue(items[index]);
    };

    const handleSaveEdit = (index: number) => {
        if (!editValue.trim()) return;

        const updatedItems = [...items];
        updatedItems[index] = editValue.trim();
        setItems(updatedItems);

        setEditingIndex(null);
        setEditValue("");
    };

    const handleCancelEdit = () => {
        setEditingIndex(null);
        setEditValue("");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">My List</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <AddItem
                        value={newList}
                        setValue={setNewList}
                        onAdd={handleAddItem}
                    />

                    <div className="border rounded-lg p-4 mt-4">
                        {items.length === 0 ? (
                            <p className="text-gray-400 text-center">
                                No items yet. Add something!
                            </p>
                        ) : (
                            <ul className="space-y-2">
                                {items.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        editingIndex={editingIndex}
                                        editValue={editValue}
                                        setEditValue={setEditValue}
                                        onEdit={handleEdit}
                                        onSave={handleSaveEdit}
                                        onCancel={handleCancelEdit}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
