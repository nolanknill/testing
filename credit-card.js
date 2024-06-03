export const purchaseItem = (price, balance, chargeCard) => {
    if (price <= balance) {
        chargeCard(price);
    }
}