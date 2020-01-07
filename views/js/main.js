$(function() {

    //creating a new burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            type: $("#burger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("added new burger");
                location.reload();
            }
        );
    });

    //eating burger & move to side

    $(".eatBurger").on("click", function(event) {
        event.preventDefault();

        let ateBurger = {
            consume: true
        };

        const id = $(this).data("id");

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: ateBurger 
        }).then(
            function() {
                console.log("you ate the burger");
                location.assign("/");
            }
        );
    });
});