bu_algo = document.getElementById("bu_algo");
bu_phy = document.getElementById("bu_phy");

function main() {
  bu_algo.addEventListener("click", () => {
    window.location.href = "algo/";
  });
  bu_phy.addEventListener("click", () => {
    window.location.href = "phy/";
  });
  bu_math.addEventListener("click", () => {
    window.location.href = "math/";
  });
}

main();
