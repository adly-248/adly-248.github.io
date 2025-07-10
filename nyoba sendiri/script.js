function sapa() {
  let nama = document.getElementById("nama").value;
  let output = document.getElementById("output");

  if (nama === "") {
    output.style.color = "red";
    output.innerText = "⚠️ Nama tidak boleh kosong!";
  } else {
    output.style.color = "green";
    output.innerText = "Halo " + nama + ", senang mengenalmu!";
  }
}
