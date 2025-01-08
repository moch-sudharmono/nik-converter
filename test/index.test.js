const parseNIK = require('../index');

test("Konversi NIK dibawah 2000 valid", () => {
    const nik = "3271063103880013";
    const result = parseNIK(nik);
    expect(result.gender).toBe("Laki-laki");
    expect(result.birthDate).toBe("1988-03-31"); 
    expect(result.location.province).toBe("JAWA BARAT");
});

test("Konversi NIK lahir diatas 2000 valid", () => {
    const nik = "3271061303100013";
    const result = parseNIK(nik);
    expect(result.gender).toBe("Laki-laki");
    expect(result.birthDate).toBe("2010-03-13");
    expect(result.location.province).toBe("JAWA BARAT");
});

test("Konversi NIK Perempuan valid", () => {
    const nik = "3271065303100013";
    const result = parseNIK(nik);
    expect(result.gender).toBe("Perempuan");
    expect(result.birthDate).toBe("2010-03-13"); 
    expect(result.location.province).toBe("JAWA BARAT");
});

test("NIK tidak valid", () => {
    expect(() => parseNIK("123")).toThrow("NIK harus terdiri dari 16 digit angka.");
});