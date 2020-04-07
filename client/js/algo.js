bu_base = document.getElementById("bu_base");
bu_struct = document.getElementById("bu_struct");

function main() {
  bu_base.addEventListener("click", () => {
    window.location.href = "base_de_donnees/";
  });
  bu_struct.addEventListener("click", () => {
    window.location.href = "struct_de_donnees/";
  });
}

main();
