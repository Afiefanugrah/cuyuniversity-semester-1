const nama = "M. Afief Anugrah";
let usia = 20;

// console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);
// console.log("nama saya adalah", nama, "dan usia saya", usia);

let biodata = document.getElementById("biodata");
// console.log(biodata);

function generateBiodata() {
  let generasi;

  if (usia > 2 && usia <= 10) {
    generasi = "anda anak-anak";
  } else if (usia > 10 && usia <= 18) {
    generasi = "generasi remaja";
  } else if (usia > 18 && usia < 30) {
    generasi = "generasi dewasa";
  } else if (usia >= 30) {
    generasi = "genenasi tua";
  } else {
    generasi = "generasi bayi";
  }

  return (biodata.innerHTML = generasi);
}

console.log(nama);
console.log(usia);

generateBiodata();
