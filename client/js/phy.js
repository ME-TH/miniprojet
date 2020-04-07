bu_electro = document.getElementById("bu_electro");
bu_quant = document.getElementById("bu_quant");

function main() {
  bu_electro.addEventListener("click", () => {
    window.location.href = "electromagnetisme/";
  });
  bu_quant.addEventListener("click", () => {
    window.location.href = "quantique/";
  });
}

main();
