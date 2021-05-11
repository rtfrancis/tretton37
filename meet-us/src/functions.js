module.exports.sortCards = (option, arr) => {
    arr.sort(function(x,y){
      let a = option === "office" ? x.office.toUpperCase() : x.name.toUpperCase();
      let b = option === "office" ? y.office.toUpperCase() : y.name.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
    })
  }

module.exports.filterByName = (option, employees) => {
    let letterGroups = [["A", "B", "C", "D", "E", "F", "G"], ["H", "I", "J", "K", "L", "M"], ["N", "O", "P", "Q", "R", "S", "T"], ["U", "V", "W", "X", "Y", "Z", "Å", "İ", "Ž"]];
      let arr = letterGroups[option];
      let nameFilter = [];
      for(var i = 0; i < employees.length; i++){
        for(var j = 0; j < arr.length; j++){
          if(employees[i].name.charAt(0) === arr[j]){
            nameFilter.push(employees[i])
          }
        }
      }
      return nameFilter;
}