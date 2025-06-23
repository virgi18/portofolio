function konfirmasiKontak(){
    const jawaban = confirm("Apakah anda ingin menghubungi saya?");
    if(jawaban) {
        window.location.href = "http://wa.me/6287884562909"
    }else{
        alert("Baik, silahkan hubungi saya kapanpun dibutuhkan.");
    }
}