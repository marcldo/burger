$(document).ready(function () {
    $(".add-to-cart").on("click", function (event) {
        let id = $(this).data("id");
        let devoured = $(this).data("devoured");
        console.log($(this).data("id"));
        let newDevouredState = { devoured };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        })
            .then(
                function () {
                    console.log("changed cart status to" + devoured)
                    location.reload();
                }
            );
    });

    // $(".create-form").on("submit", function (event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     var newCat = {
    //         name: $("#ca").val().trim(),
    //         sleepy: $("[name=sleepy]:checked").val().trim()
    //     };

    //     // Send the POST request.
    //     $.ajax("/api/cats", {
    //         type: "POST",
    //         data: newCat
    //     }).then(
    //         function () {
    //             console.log("created new cat");
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        }


        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        })
            .then(
                function () {
                    console.log("created new burger");
                    location.reload();
                }
            );
    });
});