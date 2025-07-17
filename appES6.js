class Course{
    constructor(title, instructor, image){
        this.courseId = Math.floor(Math.random() * 10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}

class UI{
    constructor(){
    }


    addListItem(course){
        var course_list = document.getElementById('course-list');

        var html = `
            <tr>
                <td><img src = "img/${course.image}" class="img-fluid img-thumbnail"></td>
                <td>${course.instructor}</td>
                <td>${course.title}</td>
                <td><a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete">Delete</a></td>
            </tr>
        `;

        course_list.innerHTML += html;
    }

    clearListItem(){
        const title = document.getElementById('title').value = "";
        const instructor = document.getElementById('instructor').value = "";
        const image = document.getElementById('image').value = "";
    }

    removeListItem(element){
        if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove();

            return true;
        }
    }

    showAlert(message, className){
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
}

class Storage {
    static getCourses() {
        let courses;

        if(localStorage.getItem('courses') === null){
            courses = [];
        }else{
            courses = JSON.parse(localStorage.getItem('courses'));
        }


        return courses;
    }

    static displayCourses() {
        const courses = Storage.getCourses();

        courses.forEach(course =>{
            const ui = new UI();
            ui.addListItem(course);
        });
    }

    static addCourse(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    static deleteCourse(element) {
        if(element.classList.contains('delete')){
            const id = element.getAttribute('data-id');

            const courses = Storage.getCourses();

            courses.forEach((course, index) =>{
                if(course.courseId == id){
                    courses.splice(index, 1);
                }
            });

            localStorage.setItem('courses', JSON.stringify(courses));
        }
    }
}
// proje yüklendiğinde local storage deki veriler sayfada gösterilsin
document.addEventListener("DOMContentLoaded", Storage.displayCourses);



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

        // save to Local Storage

        Storage.addCourse(course);


        ui.clearListItem();
        ui.showAlert("form has been added", "success")
    }

    e.preventDefault();
});

// delete butonunu aktif etme tablodan eleman silme
document.getElementById('course-list').addEventListener('click', function(e) {
    // nesne oluşturma
    const ui = new UI();


    if(ui.removeListItem(e.target) == true){
        //metodu çağır ve parametre olarak tıklanılan hedef bölgeyi gönder.
        ui.removeListItem(e.target);
    
        // delete from local storage
        Storage.deleteCourse(e.target);       
    }

    ui.showAlert("form has been deleted", "danger");
})