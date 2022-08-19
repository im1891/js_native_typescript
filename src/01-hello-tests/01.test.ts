import {mult, splitIntoWords, sum} from "./01";

let a = 1;
let b = 2;
let c = 3;


test('sum should be correct', () => {

    //входящие данные initital data

    //действие action
    const result_1 = sum(a, b);
    const result_2 = sum(b, c);
    //ожидаемый результат
    // функция expect()
    expect(result_1).toBe(3);
    expect(result_2).toBe(5)

})

test('multiply should be correct', () => {


    let result_1 = mult(a, b);
    let result_2 = mult(b, c);

    expect(result_1).toBe(2)
    expect(result_2).toBe(6)
})

test('splitted array is correct', () => {

    let sentence_1 = 'Hello my friends!';
    let sentence_2 = 'JS- the best  programming language.';

    let result_1 = splitIntoWords(sentence_1);
    let result_2 = splitIntoWords(sentence_2);

    expect(result_1.length).toBe(3);
    expect(result_1[0]).toBe('hello')
    expect(result_1[1]).toBe('my')
    expect(result_1[2]).toBe('friends')

    expect(result_2.length).toBe(5);
    expect(result_2[0]).toBe('js')
    expect(result_2[1]).toBe('the')
    expect(result_2[2]).toBe('best')
    expect(result_2[3]).toBe('programming')
    expect(result_2[4]).toBe('language')

})