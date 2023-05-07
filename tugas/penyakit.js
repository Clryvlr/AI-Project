const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const gejala = [];
  const gejalaInputs = document.querySelectorAll('input[name="gejala[]"]');
  gejalaInputs.forEach(function(input) {
    if (input.checked) {
      gejala.push(input.value);
    }
  });
  prediksiPenyakit(gejala);
});

  
  function prediksiPenyakit(gejalaInput) {

    const gejalaInput = Array.from(document.querySelectorAll('input[name="demam"]:checked'))
    .concat(Array.from(document.querySelectorAll('input[name="nyeri"]:checked')))
    .map(el => el.value);


    const gejalaPenyakit = {
      "Contract Ulcers": ["3", "16"],
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
      "NEURONITIS VESTIBULARIS":	["10", "17"],
      "OSTEOSKLEROSIS":	["20", "35"],
      "OTITIS MEDIA AKUT":	["1", "6","10", "32"],
      "MENIERE":	["6", "10", "34", "36"],
      "TONSILITIS":	["1", "2", "3", "4", "7", "10"],
      "TUMOR SYARAF PENDENGARAN": ["2", "20", "38"],
      "VERTIGO POSTULAR":	["17"],
      "SINUSITIS MAKSILARIS":	["1", "2", "4", "5", "8", "9", "11", "28", "33"],
      "SINUSITIS FRONTALIS":	["1", "2", "4", "5", "8", "9", "11", "18"],
      "SINUSITIS ETMOIDALIS":	["1", "2", "4", "5", "8", "9", "11", "18", "26", "27"],
      "SINUSITIS SFENOIDALIS":	["1", "2", "4", "5", "6", "8", "9", "11", "12"],
      "PERUT": ["1", "2", "3", "4"]
    };;
  
    const daftarPenyakit = Object.keys(gejalaPenyakit);

    let penyakitCocok = [];
  daftarPenyakit.forEach(function(penyakit) {
    let gejalaPenyakit = gejalaPenyakit[penyakit];
    let cocok = true;
    gejala.forEach(function(gejala) {
      if (!gejalaPenyakit.includes(gejala)) {
        cocok = false;
      }
    });
    if (cocok) {
      penyakitCocok.push(penyakit);
    }
  });
  if (penyakitCocok.length === 0) {
    return "Tidak ditemukan penyakit yang cocok dengan gejala-gejala yang diinput.";
  } else {
    return "Berdasarkan gejala-gejala yang diinput, kemungkinan Anda mengalami penyakit " + penyakitCocok.join(", ") + ".";
  }
  }

  function clearCheckbox() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }
  
  
  