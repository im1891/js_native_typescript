export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house?: number
    }


}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}
// u.hair = u.hair / power

    return copy

}

export function moveUser(u: UserWithLapTopType, city: string) {

// u.hair = u.hair / power

    return {...u, address: {...u.address, city: city}}
}

export function upgradeLaptop(u: UserWithLapTopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}

export function moveUserToAnotherHouse(u: UserWithLapTopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house}}
}

export function addNewBooksToUser(u: UserWithLapTopType & UserWithBooksType, books: string[]) {
    return {...u, books: [...u.books, ...books]}
}

export function updateBook(u: UserWithLapTopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export function removeBook(u: UserWithBooksType & UserWithLapTopType, book: string) {
    return {...u, books: u.books.filter(b => b !== book)}
}

export function addCompany(u: UserWithLapTopType & UserWithBooksType & WithCompaniesType, company: { id: number, title: string }) {
    return {...u, companies: [...u.companies, company]}
}

export function updateCompany(u: WithCompaniesType, id: number, title: string) {
    return {...u, companies: u.companies.map(c => c.id === id ? {...c, title} : c)}
}

export function updateCompany2(companies: { [key: string]: { id: number, title: string }[] }, newTitle: string, userName: string, companyId: number) {
    return {...companies, [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)}
}

export type LaptopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}
export type WithCompaniesType = {
    companies: { id: number, title: string }[]
}