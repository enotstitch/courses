let inputs = document.querySelectorAll("#email");
let im = new Inputmask("@*{0,}_{0,}*{0,}*{0,}_{0,}*{0,}_{0,}*{0,}_{0,}*{0,}_{0,}*{0,}_{0,}");
im.mask(inputs);
