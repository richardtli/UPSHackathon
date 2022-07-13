document.getElementById('files').onchange = function () {
    var src = URL.createObjectURL(this.files[0])
    document.getElementById('files').style.visibility = "hidden";
    document.getElementById('image').src = src
  }