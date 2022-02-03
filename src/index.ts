import cron from 'cron';

import { PayDebt } from "./Utils/FindLoans";
import { loans, users } from './common/index';

async function init(week: number): Promise<void> {
    const result = await PayDebt(users, loans, week);
    console.log(result);
}

init(1);

// Descomentar para ejecutar el cron
// cron.schedule('0 0 1 * * 1,3', () => {
//     const date = new Date();
//     const getDate = new Date(date.getFullYear(), date.getMonth(), 1);
//     init(getDate.getDay() === 1 ? 1 : 3);
// });
