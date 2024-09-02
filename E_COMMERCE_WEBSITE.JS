function changeColor(color) {
    const productImage = document.getElementById('product-image');
    switch(color) {
        case 'red':
            productImage.src = 'https://tse4.mm.bing.net/th?id=OIP.Sw_uFKmuxBOCqtcFYtbQSQHaHa&pid=Api&P=0&h=180';
            break;
        case 'blue':
            productImage.src = 'https://tse1.mm.bing.net/th?id=OIP.WOXS05C5OM6jjzsxzPHHBAHaHa&pid=Api&P=0&h=180https://tse1.mm.bing.net/th?id=OIP.WOXS05C5OM6jjzsxzPHHBAHaHa&pid=Api&P=0&h=180';
            break;
        case 'pink':
            productImage.src = 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/e/a/3xl-db1024-3bros-original-imagt7bymstzgeuu.jpeg?q=70';
            break;
        case 'black':
            productImage.src = 'https://tse3.mm.bing.net/th?id=OIP.y6eTOLJfQ96XKdRKDqu2xgHaJQ&pid=Api&P=0&h=180';
            break;
        case 'yellow':
            productImage.src = 'https://tse1.mm.bing.net/th?id=OIP.7QdBgFXz_CDTX0saQUP7sQHaHa&pid=Api&P=0&h=180';
            break;
        default:
            productImage.src = 'https://tse3.mm.bing.net/th?id=OIP.y6eTOLJfQ96XKdRKDqu2xgHaJQ&pid=Api&P=0&h=180';
    }
}

document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('selected'));
        this.classList.add('selected');
        changeColor(this.dataset.color);
    });
});

