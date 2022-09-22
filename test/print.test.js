
const Print = require ('../src/print')

describe('Print', () => {

  it('print statement to the console',() => {
    let printer = new Print();
    const mockPrint = jest.spyOn(printer, 'printStatement');

    let test1 = "20/09/2022 || 2000.00 || || 2000.00 "
    let test2 = "21/09/2022 || || 1000.00 || 1000.00 "

    printer.printStatement([test1, test2], item => item);
    expect(mockPrint).toHaveBeenCalled();

  });
});