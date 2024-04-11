function addItem() {
    var input = document.getElementById('item');
    var itemText = input.value.trim();

    if (itemText !== '') {
        var itemList = document.getElementById('itemList');
        var li = document.createElement('li');

        li.textContent = itemText;
        itemList.appendChild(li);
        input.value = '';
    } else {
        alert('Inserisci un elemento valido!');
    }
}
