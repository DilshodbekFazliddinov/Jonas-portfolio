const toogle_btn = document.querySelector(".toogle_btn");
const navbar = document.querySelector(".navbar");
const toogle_post = document.querySelector(".toogle__post");
const post_cards = document.querySelector(".post__cards");
const toogle_work = document.querySelector(".toogle__work");
const card_hidden = document.querySelector(".card-hidden");
toogle_btn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
toogle_post.addEventListener("click", () => {
  post_cards.classList.toggle("post_hidden");
});
toogle_work.addEventListener("click", () => {
  card_hidden.classList.toggle("work_hidden");
});
