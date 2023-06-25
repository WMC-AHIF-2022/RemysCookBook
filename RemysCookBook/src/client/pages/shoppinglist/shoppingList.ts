window.onload = () => {
    const addButton = document.getElementById("add-button");
    const modalContainer = document.getElementById("modal-container");
    const itemInput = document.getElementById("item-input") as HTMLInputElement;
    const okButton = document.getElementById("ok-button");
    const todoList = document.getElementById("todo-list");

    if (addButton) {
        addButton.addEventListener("click", () => {
            if (modalContainer) {
                modalContainer.style.display = "block";
                itemInput?.focus();
            }
        });
    }

    if (okButton && todoList) {
        okButton.addEventListener("click", () => {
            const itemName = itemInput?.value.trim();

            if (itemName && itemName !== "") {
                const listItem = document.createElement("li");

                const itemNameSpan = document.createElement("item-name");
                itemNameSpan.classList.add("item-name");
                itemNameSpan.textContent = itemName;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "delete";
                deleteButton.classList.add("delete-button");

                deleteButton.addEventListener("click", () => {
                    todoList.removeChild(listItem);
                });

                listItem.appendChild(itemNameSpan);
                listItem.appendChild(deleteButton);

                todoList.appendChild(listItem);

                itemInput.value = "";
            }

            if (modalContainer) {
                modalContainer.style.display = "none";
            }
        });
    }
};
