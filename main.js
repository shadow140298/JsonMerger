function merge()
{
    string1 = document.getElementById('json1').value
    string2 = document.getElementById('json2').value
    
    const obj1 = JSON.parse(string1);
    const obj2 = JSON.parse(string2);

    const mergedObject = {
        ...obj1,
        ...obj2
    };

    console.log(JSON.stringify(mergedObject));
    
    var merge = obj1.concat(obj2);
    
    document.getElementById('output').value = JSON.stringify(merge)
}
