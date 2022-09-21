class Print {
  printStatement(items, callBack) {
    const HEADER = "date || credit || debit || balance \n";
    let rows = items.map(item => callBack(item));
    console.log(HEADER + rows.join("\n"));
  }
}

module.exports = Print;