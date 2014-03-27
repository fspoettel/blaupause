docReady(function(){

    // * Test doc-ready

    var docReadyTest = document.querySelector(".js-tests__docready");
    docReadyTest.style.background = "blue";
    docReadyTest.style.color = "white";

    // * Test Apollo

    var apolloTestAdd    = document.querySelector(".js-tests__apollo--add"),
        apolloTestRemove = document.querySelector(".js-tests__apollo--remove"),
        apolloTestHas    = document.querySelector(".js-tests__apollo--has"),
        apolloTestToggle = document.querySelector(".js-tests__apollo--toggle");

    Apollo.addClass(apolloTestAdd, "bacon");
    Apollo.removeClass(apolloTestRemove, "bacon");

    if(Apollo.hasClass(apolloTestHas, "bacon")) {
        apolloTestHas.style.background = "green";
    }

    var clicked = false;

    eventie.bind(apolloTestToggle,"click",function(){
        if (!clicked){
            apolloTestToggle.style.background = "green";
            clicked = true;
        } else {
            apolloTestToggle.style.background = "red";
            clicked = false;
        }
    });

    // * Test Eventie

    var eventieBind = document.querySelector(".js-tests__eventie--bind");

        bind = false;

        eventie.bind(eventieBind, "click", function(){
            if (!bind){
                eventieBind.style.background = "green";
                bind = true;
            } else {
                eventieBind.style.background = "red";
                bind = false;
            }
        });

  // * Test Stratos

  var felix = { cool:"not cool" };

  if(Stratos.has(felix, "cool")) {
    console.log(felix.cool);
    console.log(Stratos.type(felix));
  }

  Stratos.add(felix, "likes", "coffee");

  console.log(felix.likes);

  Stratos.remove(felix, "likes");

console.log(felix.likes);

var hates = { hates : "mondays" }

Stratos.extend(felix, hates);

console.log(felix);

console.log(Stratos.keys(felix));
console.log(Stratos.vals(felix));

});