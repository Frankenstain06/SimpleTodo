interface ListItemProps {
    item: string;
    index: number;
    editingIndex: number | null;
    editValue: string;
    setEditValue: (v: string) => void;
    onEdit: (index: number) => void;
    onSave: (index: number) => void;
    onCancel: () => void;
    onDelete: (index: number) => void;
}

function ListItem({
    item,
    index,
    editingIndex,
    editValue,
    setEditValue,
    onEdit,
    onSave,
    onCancel,
    onDelete,
}: ListItemProps) {
    const isEditing = editingIndex === index;

    return (
        <li className="bg-gray-50 px-4 py-2 rounded-md flex justify-between gap-2">
            {isEditing ? (
                <div className="flex-1 flex gap-2">
                    <input
                        value={editValue}
                        onChange=
                        {(e) => setEditValue(e.target.value)}
                        className="flex-1 border rounded px-2 py-1"
                        autoFocus
                    />
                    <button
                        onClick={() => onSave(index)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                        Save
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <>
                    <span className="flex-1">{item}</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onEdit(index)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(index)}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default ListItem;
