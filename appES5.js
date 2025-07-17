// bir sınıftan nesne üretip o nesneyi save butonu aracılığıyla tabloya aktaracağız.
function Course(title, instructor, image) {
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}


// ekleme işlemi ve listeyi temizleme işlemi iiçin bir ui constructor tanımlayacağım
function UI(){

}
// ekleme fonsiyonu
UI.prototype.addListItem = function(course) {
    var course_list = document.getElementById('course-list');

    var html = `
        <tr>
            <td><img src = "img/${course.image}" class="img-thumbnail"></td>
            <td>${course.instructor}</td>
            <td>${course.title}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;

    course_list.innerHTML += html;
}
UI.prototype.clearListItem = function() {
    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('instructor').value = "";
    const image = document.getElementById('image').value = "";
}
UI.prototype.removeListItem = function(element){
    // tıklanılan hedef bölge class olarak delete içeriyor mu kontrol et
    if(element.classList.contains("delete")){
        element.parentElement.parentElement.remove();
    }
}
UI.prototype.showAlert = function(message, className){
    // ekranda kullanıcıya bazı mesajlar göstericez
    var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>
    `;

    const row = document.querySelector(".row");

    row.insertAdjacentHTML('beforebegin', alert);

    setTimeout(() =>{
        document.querySelector(".alert").remove();
    }, 3000)
}


// save butonuna tıklandığında yapılması istenilen kodlar.
document.getElementById('new-course').addEventListener('submit', function(e){
    // form elemanlarının value bilgisine ulaş
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;
    // course adında bir nesne oluştur
    const course = new Course(title, instructor, image);

    // tabloya ekleme yap ve ardından formu temizleme işlemleri
    const ui = new UI();

    if(title === "" || instructor === "" || image === ""){
        ui.showAlert("please complete the form", "warning");
    }else{
        ui.addListItem(course);
        ui.clearListItem();
        ui.showAlert("form has been added", "success")
    }



    

    e.preventDefault();
});

// delete butonunu aktif etme tablodan eleman silme
document.getElementById('course-list').addEventListener('click', function(e) {
    // nesne oluşturma
    const ui = new UI();

    //metodu çağır ve parametre olarak tıklanılan hedef bölgeyi gönder.
    ui.removeListItem(e.target);
    ui.showAlert("form has been deleted", "danger");
})