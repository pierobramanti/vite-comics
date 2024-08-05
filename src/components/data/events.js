function itemClicked(array, index) {

    array.forEach((item) => {
        item.isClicked = false
    })

    if (index >= 0 && index < array.length) {
        array[index].isClicked = true
    }
}
export { itemClicked }