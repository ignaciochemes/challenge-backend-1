export interface LoanDto {
    id: number;
    user_id: number;
    week: 1 | 3;                                  // Semana de cobro
    total_amount: number;                         // monto total de la deuda
    paid_amount: number;                          // monto total pagado
    remaining_amount: number;                     // monto total deuda pendiente
    status: 'ACTIVE' | 'FINISHED' | 'DEFAULTER';
    paid_dues: number;                            // cantidad de cuotas pagadas
    total_dues: number;                           // cantidad de cuotas totales
}