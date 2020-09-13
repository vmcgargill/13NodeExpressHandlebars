const submitBurger = $('#submitBurger');
const BurgerInput = $('#BurgerInput');
const devourBTN = $('.devourBTN');
const deleteBTN = $('.deleteBTN')

const GetAllBurgers = () => {
    return $.ajax({
      url: "/",
      method: "GET",
    });
};

const CreateBurger = (burger) => {
    return $.ajax({
      url: "/api/" + burger,
      method: "POST",
    });
};

const DevourBurger = (id) => {
    return $.ajax({
      url: "/api/" + id,
      method: "PUT",
    });
};

const DeleteBurger = (id) => {
    return $.ajax({
      url: "/api/" + id,
      method: "DELETE",
    });
};

submitBurger.on('click', function(event) {
    event.preventDefault();
    let burger = BurgerInput.val();
    console.log(burger)
    CreateBurger(burger);
    GetAllBurgers().then(function() {
        location.reload();
    });
});

devourBTN.on('click', function(event) {
    event.preventDefault();
    let burgerId = $(this).val();
    DevourBurger(burgerId);
    GetAllBurgers().then(function() {
        location.reload();
    });
})

deleteBTN.on('click', function(event) {
    event.preventDefault();
    let burgerId = $(this).val();
    DeleteBurger(burgerId);
    GetAllBurgers().then(function() {
        location.reload();
    });
})