import {ManType} from "./Destructuring";


let props: ManType

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'React'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})

test('blabla', () => {

    const l1 = props.lessons[0]

    const l2 = props.lessons[1]

    const [, ls2, ...restLessons] = props.lessons

    const {name, age} = props

    const {title} = props.address.street

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(age).toBe(32)
    expect(name).toBe('Dimych')
    expect(title).toBe('Nezavisimosti street')

    expect(ls2.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'React'})
})