type StudentTechnologiesType = {
    id: number
    title: string
}

type StudentAdressCityType = {
    title: string
    country: string
}

type StudentAddressType = {
    streetTitle: string
    city: StudentAdressCityType
}

type StudentType = {
    name: string
    age: number,
    isActive: boolean,
    address: StudentAddressType
    technologies: StudentTechnologiesType[]
}

const student: StudentType = {
    name: 'Igor',
    age: 30,
    isActive: true,
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
