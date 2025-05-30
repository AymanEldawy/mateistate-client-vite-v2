import React from 'react'
import { CurrencyFieldGroup } from '../../global'
import { RHFDatePicker, RHFInput } from '../../fields'
const MaterialFormPrices = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <CurrencyFieldGroup tab="materialPrice" />
      <RHFInput
        label="vatRate"
        name="materialPrice.vatRate"
        type="number"
      />
      <RHFInput
        label="averagePurchase"
        name="materialPrice.averagePurchase"
        type="number"
      />
      <RHFInput
        label="biggestPurchase"
        name="materialPrice.biggestPurchase"
        type="number"
      />
      <RHFInput
        label="pricingPolicy"
        name="materialPrice.pricingPolicy"
      />
      <RHFDatePicker
        label="purchaseDate"
        name="materialPrice.purchaseDate"
      />
      <RHFInput
        label="averageSales"
        name="materialPrice.averageSales"
        type="number"
      />
      <RHFInput
        label="largestSales"
        name="materialPrice.largestSales"
        type="number"
      />
      <RHFInput
        label="lastPrice"
        name="materialPrice.lastPrice"
        type="number"
      />
      <RHFDatePicker
        label="salesDate"
        name="materialPrice.salesDate"
      />
    </div>
  )
}

export default MaterialFormPrices