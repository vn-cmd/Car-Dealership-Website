$(document).ready(() => {
    const url = 'http://localhost:3000/users';

    $(btnSearch).click(function() {
        const name = $("#searchName").val().toLowerCase();
        const newUrl = `${url}/${name}`

        $.get(newUrl, function(data, status) {
            console.log(`${JSON.stringify(data)}`)
        });
    })

    $(btnGet).click(function() {
        $.get(url, function(data, status) {
            console.log(`${JSON.stringify(data)}`)
        });
    })

    $(btnForm).click(function() {
        const name = $("#name").val();
        const lastName = $("#lastname").val();

        var person = new Object();
        person.name = name;
        person.lastName = lastName;

        const data = JSON.stringify(person);
        console.log(data);

        $.ajax({
            contentType: 'application/json',
            url: url, 
            data: data, 
            type: 'POST',
            success: function(data, status) {
                console.log(`${JSON.stringify(data)}`)
            }
        });
    })
});

