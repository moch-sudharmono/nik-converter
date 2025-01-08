function parseNIK(nik) {
    //Validate nik length
    if (!/^\d{16}$/.test(nik)) {
        throw new Error("NIK harus terdiri dari 16 digit angka.");
    }

    //Get Birthdate initial
    const year  = parseInt(nik.substring(10,12), 10);
    const month = parseInt(nik.substring(8,10), 10);
    let day = parseInt(nik.substring(6,8), 10);

    //Gender: Woman equal to birth date day + 40
    const gender = day > 40 ? "Perempuan" : "Laki-laki";
    if (day > 40) day -= 40;

    //Tahun Lahir untuk akomodir kelahiran 1900 - 2000
    const currYear  = new Date().getFullYear() % 100;
    const birthYear = year > currYear ? 1900 + year: 2000 + year;
    
    //Alamat : Prov, Kako, Kecamatan
    const provinceCode  = nik.substring(0,2);
    const cityCode      = nik.substring(2,4);
    const districtCode  = nik.substring(4,6);

    const provLocation = {
        "11": "ACEH",
        "12": "SUMATERA UTARA",
        "13": "SUMATERA BARAT",
        "14": "RIAU",
        "15": "JAMBI",
        "16": "SUMATERA SELATAN",
        "17": "BENGKULU",
        "18": "LAMPUNG",
        "19": "KEPULAUAN BANGKA BELITUNG",
        "21": "KEPULAUAN RIAU",
        "31": "DKI JAKARTA",
        "32": "JAWA BARAT",
        "33": "JAWA TENGAH",
        "34": "DAERAH ISTIMEWA YOGYAKARTA",
        "35": "JAWA TIMUR",
        "36": "BANTEN",
        "51": "BALI",
        "52": "NUSA TENGGARA BARAT",
        "53": "NUSA TENGGARA TIMUR",
        "61": "KALIMANTAN BARAT",
        "62": "KALIMANTAN TENGAH",
        "63": "KALIMANTAN SELATAN",
        "64": "KALIMANTAN TIMUR",
        "65": "KALIMANTAN UTARA",
        "71": "SULAWESI UTARA",
        "72": "SULAWESI TENGAH",
        "73": "SULAWESI SELATAN",
        "74": "SULAWESI TENGGARA",
        "75": "GORONTALO",
        "76": "SULAWESI BARAT",
        "81": "MALUKU",
        "82": "MALUKU UTARA",
        "91": "P A P U A",
        "92": "PAPUA BARAT",
        "93": "PAPUA SELATAN",
        "94": "PAPUA TENGAH",
        "95": "PAPUA PEGUNUNGAN"
      };

      const province = provLocation[provinceCode] || "Provinsi tidak dikenal";

      return {
        nik,
        gender,
        birthDate:  `${birthYear}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
        location: {
            province,
            cityCode,
            districtCode,
        },
      };

    }
    
    module.exports = parseNIK;