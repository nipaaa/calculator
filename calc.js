const insertNumber = number =>{
    var output = $('#result').val();
    $('#result').val(output+number);
}

const clearNumber = () =>{
    $('#result').val('')
}
const AllclearNumber = () =>{
    $('#result').val('')
}

const calculate = ()=>{
    var result = eval( $('#result').val())
    $('#result').val(result)
}

const delation = () =>{
    var output = $('#result').val();
    if (output != '') {
        $('#result').val(output.slice(0, -1))
    }
}