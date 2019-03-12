$(document).ready(function () {
  $(function () {
    $(".devour").on("click", function (event) {
      var id = $(this).data("id");
      var newDevour = $(this).attr("data-devour");
      console.log(newDevour);

      var newDevourBurger = {
        devour: newDevour
      };

      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevourBurger
      }).then(
        function () {
          console.log("changed eaten to", newDevour);
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function (event) {
      event.preventDefault();

      var newBurger = {
        name: $("#ca").val().trim(),
        devour: $("[name=eaten]:checked").val().trim()
      };

      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          location.reload();
        }
      );
    });

    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");

      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
});