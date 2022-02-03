import { LoanDto } from "types";

export interface FinalLoanModel extends LoanDto {
    fullname: string;
    balance: number;
}