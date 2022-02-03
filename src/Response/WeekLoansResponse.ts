import { FinalLoanModel } from 'Models/FinalLoanModel';
import { LoanDto } from '../types';

export class WeekLoansResponse {

    private week1: FinalLoanModel[];
    private week3: FinalLoanModel[];
    
    constructor(week1: FinalLoanModel[], week3: FinalLoanModel[]) {
        this.week1 = week1;
        this.week3 = week3;
    }

    public getWeek1(): LoanDto[] {
        return this.week1;
    }

    public setWeek1(week1: FinalLoanModel[]): void {
        this.week1 = week1;
    }

    public getWeek2(): FinalLoanModel[] {
        return this.week3;
    }

    public setWeek2(week3: FinalLoanModel[]): void {
        this.week3 = week3;
    }

}