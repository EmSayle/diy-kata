const joinNames = (namesObj) => {

    let nameArray = [];

    function newList2(x) {
      nameArray.push(x.name);
      return nameArray;
    }
    
    let namesObj2 = namesObj.map(newList2);
    console.log(namesObj2[0]);
    
}    

module.exports = joinNames;
 