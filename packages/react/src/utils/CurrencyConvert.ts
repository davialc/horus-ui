export function currencyConvert(amount: number) {
	const convertedAmount = amount.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
	return convertedAmount;
}
