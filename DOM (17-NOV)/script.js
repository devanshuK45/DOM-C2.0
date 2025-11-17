var btn = document.querySelector('button')
var main = document.querySelector('main')

// Array of free API image URLs (random)
var arr = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6"
]

btn.addEventListener('click', function () {

    var img = document.createElement('img')
    var a = Math.floor(Math.random() * arr.length)
    var x = Math.floor(Math.random() * 80)
    var y = Math.floor(Math.random() * 80)
    var rot = Math.floor(Math.random() * 360)

    img.src = arr[a]
    img.style.position = 'absolute'
    img.style.left = x + '%'
    img.style.top = y + '%'
    img.style.rotate = rot + 'deg'
    img.style.scale = scl
    img.style.width = "150px"
    img.style.borderRadius = "10px"

    main.appendChild(img)
})
