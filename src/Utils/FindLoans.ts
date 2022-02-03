import { WEEK_1 } from "../Constants/WeekConstants";
import { FinalLoanModel } from "../Models/FinalLoanModel";
import { WeekLoansResponse } from "../Response/WeekLoansResponse";
import { LoanDto, UserDto } from "../types/index";

export const PayDebt = async (users: UserDto[], loans: LoanDto[], week: number): Promise<WeekLoansResponse> => {
    const loansWeek1: FinalLoanModel[] = [];
    const loansWeek2: FinalLoanModel[] = [];
    
    for (const loan of loans) {
        const user: UserDto = users.find(u => u.id === loan.user_id);
        if(loan.status === 'FINISHED') {
            continue;
        }
        if (user) {
            if (loan.week === week) {
                if (user.balance >= loan.total_amount) {
                    if (loan.remaining_amount < loan.total_amount) {
                        user.balance -= loan.remaining_amount;
                        loan.remaining_amount = 0;
                    } else {
                        user.balance -= loan.total_amount;
                        loan.remaining_amount -= loan.total_amount;
                    }

                    loan.paid_amount += loan.total_amount;
                    loan.paid_dues += 1;
                    loan.status = loan.remaining_amount === 0 ? 'FINISHED' : 'ACTIVE';

                    if(week === WEEK_1) {
                        loansWeek1.push({
                            ...loan,
                            fullname: user.fullname,
                            balance: user.balance,
                        });
                    } else {
                        loansWeek2.push({
                            ...loan,
                            fullname: user.fullname,
                            balance: user.balance,
                        });
                    }
                } else {
                    loan.total_amount = loan.total_amount + (loan.total_amount * 10 / 100); // || * 1.1 
                    loan.status = "DEFAULTER";
                    if(week === WEEK_1) {
                        loansWeek1.push({
                            ...loan,
                            fullname: user.fullname,
                            balance: user.balance,
                        });
                    } else {
                        loansWeek2.push({
                            ...loan,
                            fullname: user.fullname,
                            balance: user.balance,
                        });
                    }
                }
            }
        }
    }
    return new WeekLoansResponse(loansWeek1, loansWeek2);
}