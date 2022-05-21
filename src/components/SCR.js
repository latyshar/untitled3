import $ from "jquery";

            $(document).ready(function() {
            $("a#trigger").toggle(function() {
                    // Отображаем скрытый блок
                    $("div#box").fadeIn(); // fadeIn - плавное появление
                    return false; // не производить переход по ссылке
                },
                function() {
                    // Скрываем блок
                    $("div#box").fadeOut(); // fadeOut - плавное исчезновение
                    return false; // не производить переход по ссылке
                }); // end of toggle()
        }); // end of ready()


export default class tr {
}