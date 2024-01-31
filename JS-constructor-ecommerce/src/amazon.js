// src/amazon.js

function Listing(name, category, imageUrl, price) {
  this.name = name;
  this.category = category;
  this.imageUrl = imageUrl;
  this.price = price;
  this.sold = false; // default value
}

function getFormData() {
  const form = document.getElementById("form");
  const name = form.querySelector("#name").value;
  const category = form.querySelector("#category").value;
  const image = form.querySelector("#image").value;
  const price = form.querySelector("#price").value;

  return { name, category, image, price };
}

function addListing(name, category, image, price) {
  const listing = new Listing(name, category, image, price);

  // Retrieve existing products from local storage or initialize an empty array
  const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];

  // Add the new listing to the array
  existingProducts.push(listing);

  // Save the updated array back to local storage
  localStorage.setItem("Products", JSON.stringify(existingProducts));
}

window.onload = function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = getFormData();
    addListing(formData.name, formData.category, formData.image, formData.price);

    // Optional: You can update the DOM or show a success message here
  });
};

// Don't change the export statement
if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
