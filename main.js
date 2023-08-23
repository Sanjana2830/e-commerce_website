const wrapper = document.querySelector(".sliderWrapper")
const menu = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Dunk",
        price: 110,
        desc: "The '80s b-ball icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets, its padded, low-cut collar lets you take your game anywhere—in comfort.",
        colors: [
            {
                code: "brown",
                img: "./img/dunk.jpg",
            },
            {
                code: "black",
                img: "./img/dunk1-depositphotos-bgremover.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 130,
        desc: "Luxe embroidery and a subdued palette bring a vibe of understated cool to the AJ1 Mid. The special-edition Swoosh adds a hint of shine to kicks that look good (and feel good) no matter where you wear them.",
        colors: [
            {
                code: "orangered",
                img: "./img/jordans.png",
            },
            {
                code: "gray",
                img: "./img/jordans1-depositphotos-bgremover.png",
            },
        ],

    },
    {
        id: 3,
        title: "Blazer",
        price: 125,
        desc: "Being rooted doesn't mean you can't step forwards. Keeping the classic simplicity and comfort you love, your favourite wardrobe staple gets remastered for the modern era. Extra rubber extends from the midsole to the Swoosh for a bold twist.  The patchwork upper adds the perfect amount of retro attitude.",
        colors: [
            {
                code: "black ",
                img: "./img/blazer.jpeg",
            },
            {
                code: "darkgreen",
                img: "./img/blazer1-depositphotos-bgremover.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 100,
        desc: "Walk the talk in the Crater Slide, a design created with a total of at least 12% recycled content.The open-toed strap is made with some recycled content, and the footbed is made from a combination of Nike Grind rubber and soft foam.",
        colors: [
            {
                code: "blue",
                img: "./img/creator.jpg",
            },
            {
                code: "darkblue",
                img: "./img/crater1-depositphotos-bgremover.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 125,
        desc: "The Nike Hippie Shadow puts a playful twist on a classic b-ball design.Using a layered approach, doubling the branding and exaggerating the midsole, it highlights Hippie DNA with a bold, new look.",
        colors: [
            {
                code: "pink",
                img: "./img/hippie.jpeg",
            },
            {
                code: "blue",
                img: "./img/hippie1-depositphotos-bgremover.png",
            }
        ],
    },
    {
        id: 6,
        title: "Air Force",
        price: 119,
        desc: "The radiance lives on in the Air Force 1 '07. This b-ball original offers a fresh look with stitched overlays, crisp leather and the perfect amount of colour. Colour-blocking on the sole and Swooshes is combined with mismatched logos for a look that's part retro, part modern and all you.",
        colors: [
            {
                code: "blue",
                img: "./img/airforce.jpg" ,
            },
            {
                code: "green",
                img: "./img/airforce1-depositphotos-bgremover.png",
            },
        ],
    },

];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");


menu.forEach((item, index) => {
    item.addEventListener("click", () => {
       
            if (window.matchMedia('(max-width: 1200px)').matches) {
            wrapper.style.transform = `translateX(${-100 * index}vw)`;
        }
        else
        //change the current slide
        wrapper.style.transform = `translateX(${-99 * index}vw)`;
    

        //change the chosen product
        chosenProduct = products[index]

        //change texts of current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductDesc.textContent = chosenProduct.desc;
        currentProductImg.src = chosenProduct.colors[0].img;
        

        //assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[index].img;
    });
  });

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });

  function myFunction() {
    alert("successfully paid");
  }

  function subscribe() {
    alert("Subscribed!")
  }