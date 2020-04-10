$(document).ready(function () {
  function main() {
    if (typeof $("#bu_algo") != "undefined") {
      $("#bu_algo").click(() => {
        window.location.href = "algorithmique/";
      });
    }
    if (typeof $("#bu_phy") != "undefined") {
      $("#bu_phy").click(() => {
        window.location.href = "physique/";
      });
    }
    if (typeof $("#bu_math") != "undefined") {
      $("#bu_math").click(() => {
        window.location.href = "mathematique/";
      });
    }
    if (typeof $("#bu_electro") != "undefined") {
      $("#bu_electro").click(() => {
        window.location.href = "electromagnetisme/";
      });
    }
    if (typeof $("#bu_quant") != "undefined") {
      $("#bu_quant").click(() => {
        window.location.href = "quantique/";
      });
    }
    if (typeof $("#bu_anal4") != "undefined") {
      $("#bu_anal4").click(() => {
        window.location.href = "analyse_4/";
      });
    }
    if (typeof $("#bu_num") != "undefined") {
      $("#bu_num").click(() => {
        window.location.href = "analyse_numerique/";
      });
    }
    if (typeof $("#bu_base") != "undefined") {
      $("#bu_base").click(() => {
        window.location.href = "base_de_donnees/";
      });
    }
    if (typeof $("#bu_struct") != "undefined") {
      $("#bu_struct").click(() => {
        window.location.href = "structure_de_donnees/";
      });
    }
    $("#form").submit(function (e) {
      setTimeout(() => {
        alert("Thank You For The Feedback , Enjoy Your Website");
        $("#form").addClass("hide");
        e.preventDefault();
      }, 1500);
    });
  }
  main();
});
