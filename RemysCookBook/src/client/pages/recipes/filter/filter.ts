const search = (): void => {
    const searchBox: string = (document.getElementById("search-item") as HTMLInputElement).value.toUpperCase();
    const storeItems: HTMLElement = document.getElementById("product-list")!;
    const product: NodeListOf<Element> = document.querySelectorAll(".product");
    const productName: HTMLCollectionOf<HTMLHeadingElement> = storeItems.getElementsByTagName("h2");

    for (let i = 0; i < productName.length; i++) {
        let match: HTMLHeadingElement = product[i].getElementsByTagName("h2")[0] as HTMLHeadingElement;

        if (match) {
            let textVal: string = match.textContent || match.innerHTML;

            if (textVal.toUpperCase().indexOf(searchBox) > -1) {
                (product[i] as HTMLElement).style.display = "";
            } else {
                (product[i] as HTMLElement).style.display = "none";
            }
        }
    }
};