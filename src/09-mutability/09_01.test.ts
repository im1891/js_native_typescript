import exp from "constants";

function increaseAge(u: UserType) {
    u.age++
}


type UserType = {
    name: string
    age: number
    address: { title: string }
}


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        },
    }

    increaseAge(user);

    expect(user.age).toBe(33);

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000);
})


test('array reference test', () => {
    let users: UserType[] = [
        {
            name: 'Dimych',
            age: 32,
        },
        {
            name: 'Dimych',
            age: 32,
        }

    ]

    let admins = users

    admins.push({name: 'Bandiyugan', age: 10})
    expect(users.length).toBe(3)
    expect(users[2]).toEqual({name: 'Bandiyugan', age: 10})
})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = adminsCount + 1;

    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test('reference type test 2', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address,
    }

    let addr = user.address;

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address,
    }

    address.title = 'Minsk City'

    expect(user.address.title).toBe('Minsk City')
    expect(user.address).toBe(user2.address)

})

test('reference type array test', () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address,
    }


    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address,
    }

    const users: UserType[] = [user, user2, {name: 'Katya', age: 19, address: address}]
    const admins = [user, user2]

    admins[0].name = 'Dmitriy';

    expect(users[0].name).toBe('Dmitriy')
    expect(user.name).toBe('Dmitriy')
})


test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    pasportist(letters)

    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})

function pasportist(letters: any) {
    let copy = [...letters.sort()]
}