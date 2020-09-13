const submitBurger = $('#submitBurger');
const BurgerInput = $('#BurgerInput');

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

submitBurger.on('click', function(event) {
    event.preventDefault();
    let burger = BurgerInput.val();
    console.log(burger)
    CreateBurger(burger);
    GetAllBurgers().then(function() {
        location.reload();
    });
})