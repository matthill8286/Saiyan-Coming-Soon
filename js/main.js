/*
 * SAIYAN MOTORSPORT V2 - Innovative Coming Soon Template
 * Build Date: April 2015
 * Update Date: May 2015
 * Author: Madeon08
 * Copyright (C) 2015 Madeon08
 * This is a premium product available exclusively on http://themeforest.net
 */

/*  TABLE OF CONTENTS
    ---------------------------
     1. Opening effect
     2. Countdown
     3. Interaction for the user
     4. Newsletter
     5. Venobox Gallery
     6. Map, Structure & Design
*/

/* ------------------------------------- */
/* 1. Opening effect ................... */
/* ------------------------------------- */

// When all the files were been loaded
$(window).load(function () {
  // FadeIn for the left and middle part
  setTimeout(function () {
    $(".left-part")
      .css("left", "0")
      .addClass("fadeInLeft")
      .removeClass("fadeOutLeft")
    $(".middle-part")
      .css("left", "50vw")
      .addClass("fadeInRight")
      .removeClass("fadeOutRight")
    $("#firefly-wrap").addClass("").removeClass("opacity-0")
  }, 2400)

  // FadeOut for the loading
  setTimeout(function () {
    $(".loading").addClass("fadeOut")
  }, 3600)

  // FadeIn for the figures
  setTimeout(function () {
    $(".digit").each(function (i) {
      ;(function (self) {
        setTimeout(function () {
          $(self).addClass("fadeInDown").removeClass("opacity-0")
        }, i * 150 + 150)
      })(this)
    })
  }, 3200)

  // FadeIn for the text "Days"
  setTimeout(function () {
    $(".text-day").addClass("fadeInRight").removeClass("opacity-0")
    $("#chevron-mobile").addClass("bounce").removeClass("opacity-0")
  }, 4050)

  // FadeIn for the text
  setTimeout(function () {
    $(".countdown-block h2").addClass("fadeInUp").removeClass("opacity-0")
  }, 4200)

  // FadeIn Alert button & Social Icons / Display none loading
  setTimeout(function () {
    $("#alert-button-1").addClass("fadeInUp").removeClass("opacity-0")
    $(".social-icons").addClass("fadeInDown").removeClass("opacity-0")
    $(".loading").addClass("display-none")
  }, 4700)

  // Deleting fadeInUp to prevent when the user click on it for having the good effect
  setTimeout(function () {
    $("#alert-button-1").addClass("shake").removeClass("fadeInUp")
    $("#chevron-mobile").addClass("fadeOutDown").removeClass("bounce")
  }, 5900)

  setTimeout(function () {
    $("#alert-button-1").addClass("").removeClass("shake")
    $("#chevron-mobile").addClass("display-none").removeClass("fadeOutDown")
  }, 7100)
})

/////////////////////////////////////////////////////

$(document).ready(function ($) {
  /* ------------------------------------- */
  /* 2. Countdown ........................ */
  /* ------------------------------------- */

  // Set you end date just below
  $("#countdown_dashboard").countDown({
    targetDate: {
      day: 31,
      month: 6,
      year: 2022,
      hour: 11,
      min: 13,
      sec: 0
    },
    omitWeeks: true
  })

  /* ------------------------------------- */
  /* 3. Interaction for the user ......... */
  /* ------------------------------------- */

  // Opening About Part
  $("button.open-left-part").on("click", function () {
    var onMobile = false

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
      onMobile = true
    }

    if (onMobile === false) {
      $(".part-1")
        .addClass("fadeInLeft")
        .removeClass("fadeOutLeft")
        .css("left", "0")
    } else {
      $(".part-1").addClass("").removeClass("fadeOutLeft").css("left", "0")
    }

    if ($(window).width() <= 1024) {
      $(".social-icons").addClass("fadeOutUp").removeClass("fadeInDown")
      $("html, body").animate(
        {
          scrollTop: $(".left-part").offset().top
        },
        700
      )
    }

    setTimeout(function () {
      $("button.close-left-part").css("left", "0")
      $("button.close-left-part")
        .addClass("fadeInLeft")
        .removeClass("fadeOutLeft")
        .css("left", "0")
    }, 850)

    setTimeout(function () {
      $("button.close-left-part i").addClass("bounceInDown")
    }, 1200)

    setTimeout(function () {
      $("button.close-left-part i")
        .addClass("flash")
        .removeClass("bounceInDown")
    }, 2401)
  })

  // Closing About Part
  $("button.close-left-part").on("click", function () {
    $(".part-1").addClass("fadeOutLeft").removeClass("fadeInLeft")
    $("button.close-left-part")
      .addClass("fadeOutLeft")
      .removeClass("fadeInLeft")
    $("button.close-left-part i").removeClass("flash")
    if ($(window).width() <= 1024) {
      $(".social-icons").addClass("fadeInDown").removeClass("fadeOutUp")
    }
    setTimeout(function () {
      $("button.close-left-part").css("left", "-100px")
      $(".part-1").css("left", "-50vw")

      $(".item-plus").animate(
        {
          scrollTop: $(".left-part").offset().top
        },
        0
      )
    }, 800)
  })

  // Hover middle part, effect on the button alert
  $(".middle-part").hover(function () {
    $("#alert-button-1").toggleClass("shake")
  })

  // Movement to the right part
  $("#alert-button-1").click(function () {
    if ($(window).width() >= 1025) {
      $(".list-sections").addClass("left-50")
      $("#alert-button-1")
        .addClass("bounceOutRight")
        .removeClass("bounceInLeft")
      $(".part-1").addClass("fadeOutLeft").removeClass("fadeInLeft")
      $("button.close-left-part")
        .addClass("fadeOutLeft")
        .removeClass("fadeInLeft")
      $("button.close-left-part i").removeClass("rotateIn")

      setTimeout(function () {
        $("#alert-button-1").addClass("display-none").removeClass("")
        $("#alert-button-2").addClass("fadeIn").removeClass("display-none")
      }, 500)

      setTimeout(function () {
        $("button.close-left-part").css("left", "-100px")
        $(".part-1").css("left", "-50vw")
      }, 800)
    } else if ($(window).width() <= 1024) {
      $("html, body").animate(
        {
          scrollTop: $(".right-part").offset().top
        },
        700
      )
    }
  })

  // Back Home!
  $("#alert-button-2").click(function () {
    $(".list-sections").removeClass("left-50")
    $("#alert-button-2").addClass("fadeOut").removeClass("fadeIn")
    setTimeout(function () {
      $("#alert-button-1")
        .addClass("bounceInLeft")
        .removeClass("bounceOutRight display-none")
      $("#alert-button-2").addClass("display-none").removeClass("fadeOut")
    }, 500)
    setTimeout(function () {
      $("#alert-button-1").addClass("").removeClass("bounceInLeft")
    }, 1750)
  })

  // Displaying of the map
  $("#locate-us").click(function () {
    $(".left-part").addClass("fadeOutLeft").removeClass("fadeInLeft")
    $(".middle-part").addClass("fadeOutRight").removeClass("fadeInRight")
    $(".social-icons").addClass("fadeOutUp").removeClass("fadeInDown")
    $(".overlay-map").addClass("display-none").removeClass("")
    $("#wrapper_mbYTP_bgndVideo")
      .addClass("animated-middle fadeOut")
      .removeClass("fadeIn")
    $("#backstretch-cloud").addClass("fadeOut").removeClass("fadeIn")
    $("#cloudy").addClass("fadeOut").removeClass("fadeIn")
    setTimeout(function () {
      $("button.close-map")
        .addClass("fadeInLeft")
        .removeClass("fadeOutLeft")
        .css("left", "0")
    }, 850)
    setTimeout(function () {
      $("button.close-map i").addClass("bounceInDown")
      $("#wrapper_mbYTP_bgndVideo")
        .addClass("index-9999")
        .removeClass("fadeOut")
      $("#backstretch-cloud").addClass("index-9999").removeClass("fadeOut")
      $("#cloudy").addClass("index-9999").removeClass("fadeOut")
    }, 1200)
    setTimeout(function () {
      $("button.close-map i").addClass("flash").removeClass("bounceInDown")
    }, 2401)
    setTimeout(function () {
      $("#map-container").css("z-index", "8")
      $(".left-part").css("left", "-50vw")
      $(".middle-part").css("left", "100vw")
      $(".social-icons").addClass("display-none").removeClass("")
    }, 1000)
  })

  // Closing of the map
  $("button.close-map").on("click", function () {
    $(".left-part")
      .css("left", "0")
      .addClass("fadeInLeft")
      .removeClass("fadeOutLeft")
    $(".middle-part")
      .css("left", "50vw")
      .addClass("fadeInRight")
      .removeClass("fadeOutRight")
    $(".social-icons")
      .addClass("fadeInDown")
      .removeClass("fadeOutUp display-none")
    $("button.close-map").addClass("fadeOutLeft").removeClass("fadeInLeft")
    $("button.close-map i").removeClass("flash")
    $("#map-container").css("z-index", "-10")
    $("#wrapper_mbYTP_bgndVideo").addClass("fadeIn").removeClass("index-9999")
    $("#backstretch-cloud").addClass("fadeIn").removeClass("index-9999")
    $("#cloudy").addClass("fadeIn").removeClass("index-9999")
    setTimeout(function () {
      $("button.close-map").css("left", "-100px")
    }, 800)
    setTimeout(function () {
      $(".overlay-map").addClass("").removeClass("display-none")
    }, 1250)
  })

  /////////////////////////////////////////////////////

  /* ------------------------------------- */
  /* 4. Newsletter ....................... */
  /* ------------------------------------- */

  window.onload = function () {
    document
      .getElementById("notifyMe")
      .addEventListener("submit", function (event) {
        event.preventDefault()

        // these IDs from the previous steps
        emailjs.sendForm("service_x5aezqo", "notification_form", this).then(
          function () {
            document.querySelector(".message").innerHTML =
              "<span style='color: rgb(246, 234, 35);'>Information received, thank you.</span>"

            setTimeout(function () {
              document.querySelector(".message").innerHTML = ""
            }, 2500)

            document.getElementById("mail-sub").value = ""

            console.log("SUCCESS!")
          },
          function (error) {
            console.log("FAILED...", error)
          }
        )
      })
  }

  /* ------------------------------------- */
  /* 5. Venobox Gallery .................. */
  /* ------------------------------------- */

  /* custom settings */
  $(".venobox").venobox({
    border: "1px", // default: '0'
    bgcolor: "#000", // default: '#fff'
    titleattr: "data-title", // default: 'title'
    numeratio: true, // default: false
    infinigall: true // default: false
  })

  /* auto-open #firstlink on page load */
  $("#firstlink").venobox().trigger("click")
})

/* ------------------------------------- */
/* 6. Map, Structure & Design .......... */
/* ------------------------------------- */

function initMap() {
  // Basic options for a simple Google Map
  // The latitude and longitude to center the map (always required)
  var center = new google.maps.LatLng(34.6821175, 32.9726388)
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 14,
    center: center,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "on"
          },
          {
            lightness: 33
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2e5d4"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#c5dac6"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [
          {
            visibility: "on"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#c5c6c6"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#e4d7c6"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#fbfaf7"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#acbcc9"
          }
        ]
      }
    ]
  }

  var map = new google.maps.Map(
    document.getElementById("map"),
    mapOptions,
    center
  )

  var locations = [
    [
      '<h6>Saiyan Motorsport, Limassol</h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-coffee"></i> Visit us, we pay the coffee!</p>',
      34.6821175,
      32.9726388,
      4
    ]
  ]

  var infowindow = new google.maps.InfoWindow()

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    })

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }

  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker)
  })
}
