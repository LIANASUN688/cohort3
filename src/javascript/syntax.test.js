import functions from './syntax'
test('testing function', (prompt) => {
    expect(functions.jsTypesOfinput(prompt=[])).toBe('array');
    expect(functions.jsTypesOfinput(prompt={})).toBe('object');
    expect(functions.jsTypesOfinput(prompt=1)).toBe('number');
    expect(functions.jsTypesOfinput(prompt=document.all)).toBe('undefined');
    expect(functions.jsTypesOfinput(prompt='string')).toBe('string');
    expect(functions.jsTypesOfinput(prompt=false)).toBe('boolean');
    
    
});
test( 'testing sum',(para1,para2) => {
    expect(functions.sum(1,2)).toBe(4);
}
