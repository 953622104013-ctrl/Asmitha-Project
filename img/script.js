const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const form = document.getElementById("postForm");

// Image Preview
imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            preview.setAttribute("src", this.result);
            preview.style.display = "block";
        });

        reader.readAsDataURL(file);
    }
});

// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const image = imageInput.files[0];

    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);

    alert("Form Submitted Successfully!");

    form.reset();
    preview.style.display = "none";
});
