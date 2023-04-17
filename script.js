var whichcity;
var cityhistory = [];

$(function () {
  if (JSON.parse(localStorage.getItem("dataset")) !== null) {
    let arrl = JSON.parse(localStorage.getItem("dataset"));

    for (var i = 0; i < arrl.length; i++) {
      cityhistory.push(arrl[i]);
    }
    cityhistory = [...new Set(cityhistory)];
    for (var t = 0; t < cityhistory.length; t++) {
      var $addbtn = $(
        '<button type="submit" class="searchhistoryparts btn" id="city-' +
          cityhistory[t] +
          '" />'
      );

      $addbtn
        .html(cityhistory[t])
        .click(function () {
          whichcity = $(this).html();
          fetch3();
        })
        .appendTo($(".searchhistory"));
    }
  }
});

