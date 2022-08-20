import {StudentType} from "../02/02";
import {activateStudent, addSkill, doesStudentLiveIn} from "./03";


let testStudent: StudentType;

beforeEach(() => {
    testStudent = {
        name: 'Igor',
        age: 30,
        isActive: false,
        address: {
            streetTitle: 'Reliefnaya',
            city: {
                title: 'Zaporizhzhya',
                country: 'Ukraine',
            },

        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },
        ]
    }
})

test('added skill correctly', () => {
    expect(testStudent.technologies.length).toBe(3);

    addSkill(testStudent, 'React');

    expect(testStudent.technologies.length).toBe(4);
    expect(testStudent.technologies[3].title).toBe('React');
    expect(testStudent.technologies[3].id).toBeDefined();


})

test('student should be made active', () => {
    expect(testStudent.isActive).toBe(false);

    activateStudent(testStudent);

    expect(testStudent.isActive).toBe(true);


})

test('Does student live in city', () => {
  let res1= doesStudentLiveIn(testStudent, 'Moscow');
  let res2= doesStudentLiveIn(testStudent, 'Zaporizhzhya');

    expect(res1).toBe(false);
    expect(res2).toBe(true);
})