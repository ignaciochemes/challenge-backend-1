import { UserDto, LoanDto } from '../types'

export var users: UserDto[] = [
    {
        id: 1,
        fullname: 'Jhon Doe',
        balance: 1000,
    },
    {
        id: 2,
        fullname: 'Ernesto Ariza',
        balance: 500,
    },
    {
        id: 3,
        fullname: 'Sofia Costa',
        balance: 12550,
    },
    {
        id: 4,
        fullname: 'Ana Rosa Seco',
        balance: 359,
    },
    {
        id: 5,
        fullname: 'Anabel Vila',
        balance: 145600,
    }
]

export var loans: LoanDto[] = [
    {
        id: 1,
        user_id: 1,
        week: 1,
        total_amount: 480,
        paid_amount: 440,
        remaining_amount: 40,
        status: 'ACTIVE',
        paid_dues: 11,
        total_dues: 12,
    },
    {
        id: 2,
        user_id: 3,
        week: 3,
        total_amount: 12000,
        paid_amount: 0,
        remaining_amount: 12000,
        status: 'ACTIVE',
        paid_dues: 0,
        total_dues: 6,
    },
    {
        id: 3,
        user_id: 4,
        week: 3,
        total_amount: 1500,
        paid_amount: 1000,
        remaining_amount: 500,
        status: 'ACTIVE',
        paid_dues: 2,
        total_dues: 3,
    },
    {
        id: 4,
        user_id: 2,
        week: 1,
        total_amount: 2100,
        paid_amount: 1050,
        remaining_amount: 1050,
        status: 'ACTIVE',
        paid_dues: 3,
        total_dues: 6,
    },
    {
        id: 5,
        user_id: 5,
        week: 3,
        total_amount: 30000,
        paid_amount: 30000,
        remaining_amount: 0,
        status: 'FINISHED',
        paid_dues: 3,
        total_dues: 3,
    },
    {
        id: 6,
        user_id: 5,
        week: 1,
        total_amount: 30000,
        paid_amount: 0,
        remaining_amount: 30000,
        status: 'ACTIVE',
        paid_dues: 0,
        total_dues: 12,
    },
    {
        id: 7,
        user_id: 3,
        week: 3,
        total_amount: 4500,
        paid_amount: 0,
        remaining_amount: 4500,
        status: 'ACTIVE',
        paid_dues: 0,
        total_dues: 3,
    }
]