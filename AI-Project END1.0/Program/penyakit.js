const gejalaPenyakit = {
  "CONTRACT ULCERS": ["3", "16"],
  "ABAES PARAFARINGEAL": ["3", "19"],
  "ABAES PERITONAILER": ["1", "2", "7", "14", "16", "22"],
  "BAROTITIS MEDIA": ["2", "6"],
  "DEVIASI SEPTUM": ["1", "5", "6", "15", "25", "29"],
  "FARINGITIS": ["1", "3", "7", "13", "14"],
  "KANKER LARING": ["3", "4", "7", "13", "16", "23", "24"],
  "KANKER LEHER DAN KEPALA": ["3", "12", "15", "21", "30", "31"],
  "KANKER LEHER METASTATIK": ["12"],
  "KANKER NASOFARING": ["5", "15"],
  "KANKER TONSIL": ["7", "12"],
  "LARINGITIS": ["1", "3", "14", "19", "37"],
  "NEURONITIS VESTIBULARIS": ["10", "17"],
  "OSTEOSKLEROSIS": ["20", "35"],
  "OTITIS MEDIA AKUT": ["1", "6", "10", "32"],
  "MENIERE": ["6", "10", "34", "36"],
  "TONSILITIS": ["1", "2", "3", "4", "7", "10"],
  "TUMOR SYARAF PENDENGARAN": ["2", "20", "38"],
  "VERTIGO POSTULAR": ["17"],
  "SINUSITIS MAKSILARIS": ["1", "2", "4", "5", "8", "9", "11", "28", "33"],
  "SINUSITIS FRONTALIS": ["1", "2", "4", "5", "8", "9", "11", "18"],
  "SINUSITIS ETMOIDALIS": ["1", "2", "4", "5", "8", "9", "11", "18", "26", "27"],
  "SINUSITIS SFENOIDALIS": ["1", "2", "4", "5", "6", "8", "9", "11", "12"],
  "PERUT": ["1", "2", "3", "4"]
};

let prediksi = '';
const daftarPenyakit = Object.keys(gejalaPenyakit);
const form = document.getElementsByTagName('form')[0];
const p = document.getElementById('prediksi');

//pas btn submit diteken
form.addEventListener("submit", function (event) {
  event.preventDefault();
  

  let gejala_chk = Array.from(document.querySelectorAll('input[name="gejala"]:checked'))
    .map(function (value) {
      return value.id;
    });

    let penyakitCocok = [];
    let penyakitCocok100 = [];


  for (let penyakit of daftarPenyakit) {
    let cocok = true;
    let jumlahCocok = 0;
    let persentaseCocok = 0;;
  

    for (let gejala of gejala_chk) {
      if (!gejalaPenyakit[penyakit].includes(gejala)) {
        cocok = false;
        break;
      } else {
        jumlahCocok++;
      }
    }
    

    if (cocok) {
      persentaseCocok = (jumlahCocok / gejalaPenyakit[penyakit].length) * 100;
      if (persentaseCocok === 100) {
        penyakitCocok100.push(penyakit);
      } else {
        penyakitCocok.push(penyakit);
      }
  }
}

  if(gejala_chk.length === 0){
    window.alert("Belum ada gejala yang di pilih!");
    return;
  }
  
  if (penyakitCocok.length === 0){
    window.alert("Maaf, belum ditemukan penyakit yang cocok dengan gejala yang diinput. Mohon input gejala yang teliti");
    
  } else {
    window.location.href = "output.html";   
    if (penyakitCocok100.length === 0) {
      prediksi = ` Berdasarkan gejala yang telah anda input, ada beberapa penyakit yang memiliki kesamaan gejala yaitu, <br><b> ${penyakitCocok.join(", ")+"."} </b>
      <br>Segeralah periksakan lebih lanjut penyakit anda ke dokter atau rumah sakit terdekat. <i><br> Semangatt!! Semoga lekas sembuh! Tuhan memberkati!<i>`;
    } else {
      prediksi = ` Berdasarkan gejala yang telah anda input, Anda mengalami sakit <b> ${penyakitCocok100.join(", ") + "."} </b> 
      <br>Selain itu, ada kemungkinan lain penyakit yang anda alami, yaitu <b> ${penyakitCocok.join(", ") + "."} </b>
      <br>Segeralah pergi ke dokter atau rumah sakit terdekat untuk pemeriksaan lebih lanjut. <br>Semangattt! Semoga cepat sembuh! Tuhan Memberkati! `;
    }
    localStorage.setItem("prediksi", prediksi);
    p.innerHTML = prediksi;
  }
  
  })
