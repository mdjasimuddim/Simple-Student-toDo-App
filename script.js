var add = document.getElementById('add');


add.addEventListener('click',function(pera){
    pera.preventDefault();
    var name = document.getElementById('name');
    var id = document.getElementById('id');
    var dept = document.getElementById('dept');
    var cgpa = document.getElementById('cgpa');
    if(name.value == ''){
        name.style.backgroundColor = 'red';
        alert('Please fill the input requirement');
    }
    else if(id.value == ''){
        id.style.backgroundColor = 'red';
        alert('Please fill the id of student');
    }
    else if(dept.value == ''){
        dept.style.backgroundColor = 'red';
        alert('Please fill the department');
    }
    else if(cgpa.value == ''){
        cgpa.style.backgroundColor = 'red';
        alert('cgpa is required');
    }else{
        var tbody = document.getElementById('tbody');
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = name.value;
        tr.appendChild(td1);

        // var tr2 = document.createElement('tr');
        var td2 = document.createElement('td');
        td2.innerHTML = id.value;
        tr.appendChild(td2);

        // var tr3 = document.createElement('tr');
        var td3 = document.createElement('td');
        td3.innerHTML = dept.value;
        tr.appendChild(td3);

        var td4 = document.createElement('td');
        td4.innerHTML = cgpa.value;
        tr.appendChild(td4);

        tbody.appendChild(tr);
    }
})