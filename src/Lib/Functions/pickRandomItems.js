const pickRandomItems = (array_, howMany_) => {
    const array = [...array_];
    const randomItems = [];
    for (let i = 0; i< howMany_; i++){
        let randIndx = Math.floor(array.length*Math.random()); // choose random index
        randomItems.push(array.splice(randIndx, 1)[0]);} // pick random item and place it in randomItems
    return randomItems;
}
export default pickRandomItems;