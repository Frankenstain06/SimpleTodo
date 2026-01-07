interface AddItemProps {
    value: string;
    setValue: (v: string) => void;
    onAdd: () => void;
}

function AddItem({ value, setValue, onAdd }: AddItemProps) {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onAdd();
    };

    return (
        <div className="flex gap-3">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your item"
                className="flex-1 border rounded-lg px-4 py-2"
            />
            <button
                onClick={onAdd}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
                Add
            </button>
        </div>
    );
}

export default AddItem;
