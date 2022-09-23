import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToAnotherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLapTopType, WithCompaniesType
} from "./10_01";


test('referencetype test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change adress test', () => {
    let user: UserWithLapTopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.address.city).toBe('Minsk')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLapTopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        }
    }

    const userWithMacbook = upgradeLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithMacbook)
    expect(user.laptop).not.toBe(userWithMacbook.laptop)
    expect(user.laptop.title).toBe('Asus')
    expect(userWithMacbook.laptop.title).toBe('Macbook')
    expect(user.address).toBe(userWithMacbook.address)
})

test('change house', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = moveUserToAnotherHouse(user, 99)

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.laptop)
    expect(user.books).toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'restAPI'])

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('restAPI')
    expect(userCopy.books.length).toBe(6)

})

test('update js to ts', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')
    console.log(userCopy)
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)

})

test('remove js book', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books.length).toBe(3)
    expect(user.books.length).toBe(4)

})

test('add company', () => {
    let user: UserWithLapTopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react'],
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-inkubator'}],
    }

    const userCopy = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)

})

test('update companies', () => {
    let user: UserWithLapTopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react'],
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-inkubator'}],
    }

    const userCopy = updateCompany(user, 1, 'Epam2') as UserWithBooksType & UserWithLapTopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam2')
    expect(user.companies[0].title).toBe('Epam')

})

test('update2 companies', () => {

    let companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'It-inkubator'}],
        'Artem': [{id: 1, title: 'It-inkubator'}]
    }

    let copyCompanies = updateCompany2(companies, 'Epam2', 'Dimych', 1)

    expect(copyCompanies['Dimych']).not.toBe(companies['Dimych'])
    expect(copyCompanies['Artem']).toBe(companies['Artem'])
    expect(copyCompanies['Dimych'][0].title).toBe('Epam2')


})