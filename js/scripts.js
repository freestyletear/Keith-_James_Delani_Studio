$(document).ready(function () {
  $(".clickable").click(function () {
    $(".showing").toggle();
    $(".hidden").toggle();
  });

  $(".clickable-2").click(function () {
    $(".showing-2").toggle();
    $(".hidden-2").toggle();
  });

   $(".clickable-3").click(function () {
     $(".showing-3").toggle();
     $(".hidden-3").toggle();
   });
});


$(document).ready(function () {
  $(".image_description").hide();
  $(".hover").animate({ opacity: 1 });

  $(".hover").hover(
    function () {
      $(this).animate({ opacity: 0.4 }, 200);
      $(".image_description").fadeIn();
    },
    function () {
      $(this).animate({ opacity: 1 }, 500);
      $(".image_description").fadeOut();
    }
  );

  $(".image_description-2").hide();
  $(".hover-2").animate({ opacity: 1 });

  $(".hover-2").hover(
    function () {
      $(this).stop().animate({ opacity: 0.4 }, 200);
      $(".image_description-2").fadeIn();
    },
    function () {
      $(this).stop().animate({ opacity: 1 }, 500);
      $(".image_description-2").fadeOut();
    }
  );

   $(".image_description-3").hide();
   $(".hover-3").animate({ opacity: 1 });

   $(".hover-3").hover(
     function () {
       $(this).stop().animate({ opacity: 0.4 }, 200);
       $(".image_description-3").fadeIn();
     },
     function () {
       $(this).stop().animate({ opacity: 1 }, 500);
       $(".image_description-3").fadeOut();
     }
   );

   $(".image_description-4").hide();
   $(".hover-4").animate({ opacity: 1 });

   $(".hover-4").hover(
     function () {
       $(this).stop().animate({ opacity: 0.4 }, 200);
       $(".image_description-4").fadeIn();
     },
     function () {
       $(this).stop().animate({ opacity: 1 }, 500);
       $(".image_description-4").fadeOut();
     }
   );

   $(".image_description-5").hide();
   $(".hover-5").animate({ opacity: 1 });

   $(".hover-5").hover(
     function () {
       $(this).stop().animate({ opacity: 0.4 }, 200);
       $(".image_description-5").fadeIn();
     },
     function () {
       $(this).stop().animate({ opacity: 1 }, 500);
       $(".image_description-5").fadeOut();
     }
   );

   $(".image_description-6").hide();
   $(".hover-6").animate({ opacity: 1 });

   $(".hover-6").hover(
     function () {
       $(this).stop().animate({ opacity: 0.4 }, 200);
       $(".image_description-6").fadeIn();
     },
     function () {
       $(this).stop().animate({ opacity: 1 }, 500);
       $(".image_description-6").fadeOut();
     }
   );

   $(".image_description-7").hide();
   $(".hover-7").animate({ opacity: 1 });

   $(".hover-7").hover(
     function () {
       $(this).stop().animate({ opacity: 0.4 }, 200);
       $(".image_description-7").fadeIn();
     },
     function () {
       $(this).stop().animate({ opacity: 1 }, 500);
       $(".image_description-7").fadeOut();
     }
   );

   $(".image_description-8").hide();
   $(".hover-8").animate({ opacity: 1 });

   $(".hover-8").hover(
     function () {
       $(this).stop().animate({ opacity: 0.4 }, 200);
       $(".image_description-8").fadeIn();
     },
     function () {
       $(this).stop().animate({ opacity: 1 }, 500);
       $(".image_description-8").fadeOut();
     }
   );
});



// Form validation and acknowledment
let collectInput = () => {
    if ($(`#userName`).val() == ``) {
        alert(`Please fill in your name`);
    } else if ($(`#userMail`).val() == ``) {
        alert(`Please provide your E-mail`)
    }
     else if ($(`#userMessage`).val() == ``) {
        alert(`We'd love to hear your feedback. Please fill it in`)
    }
     else {
    userName = $(`#userName`).val();
    alert(userName + ` we have recieved your message. Thank you for reaching out to us`)
    }
}



//
// $("#contact-form form").submit(function (e) {
//         e.preventDefault();

//         var name = $("#name").val();
//         var email = $("#email").val();
//         var message = $("#message").val();
//         // var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

//         // Check for empty fields
//         if (name == '' || email == '' || message == '') {
//             $("#name-error").html("<p class='text-danger'>Please fill in you name.</p>");
//             $("#email-error").html("<p class='text-danger'>Please fill in your valid email.</p>");
//             $("#message-error").html("<p class='text-danger'>Please fill in the field.</p>");
//         } else if (email == '' || !emailReg.test(email)) {
//             $("#email-error").html("<p class='text-danger'>Please enter a valid email address.</p>");
//         } else {
//             $("#name-error").html("");
//             $("#email-error").html("");
//             $("#message-error").html("");
//             $(".alert-success").text(`${name} we have received your message. Thank you for reaching out to us.`)
//             $(".alert-success").show();
//         }


// $(document).ready(function () {
//   $("#button").click(function () {
//     $(".bg-modal").show();
//   });
// });

// $(document).ready(function () {
//   $(".close").click(function () {
//     $(".bg-modal").show().style.display = "flex";
//   });
// });


// $(document).ready(function () {
//   $("#button").click(function (event) {
//     event.preventDefault();
//     $(".bg-modal").show();


// document.getElementById('button').addEventListener('click',
// function(){
//   document.querySelector('.bg-modal').style.display = 'flex';
// });

// document.querySelector('.close').addEventListener('click', 
// function() {
//   document.querySelector('.bg-modal').style.display = 'none';
// });

// var myModal = document.getElementById(".bg-modal");
// var myInput = document.getElementById("button");

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });