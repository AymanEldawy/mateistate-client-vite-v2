# API Notes

## [x] currency
- bulk delete
## [O] bank 
- bulk delete
## [O] Building
- bulk delete
## [x] store 
- bulk delete
## [x] shop 
- bulk delete
## [x] accounts 
- bulk delete 
## lessor
- bulk delete 
## owner
- bulk delete 
## seller
- bulk delete 
## cost_center
- bulk delete 
## country
- bulk delete 
## bank
- bulk delete 
## currency
- bulk delete 
## material_group
- bulk delete 
## category
- bulk delete 
## category_problem
- bulk delete 
## owner_expenses_types


## apartment
## land
## villa
## parking
## contract
## patterns
## entries
## vouchers
## bills
## cheques
## user
## op_collection
## op_partial_collection
## op_return
## installment
## reservation_property
## user_work_times
## service
## owner_expenses




## Contract pattern
- change all these columns in database from json to string to only except enums 'DEBIT' || 'CREDIT' || 'NOTHING' 
columns:
    moveCostCenterWithRevenue
    moveCostCenterWithTenant
    moveCostCenterWithInsuranceRevenue
    moveCostCenterWithPriceRevenue
    moveCostCenterWithIntentionRatifying
    moveCostCenterWithOtherFee
    moveCostCenterWithCommissionClient
    moveCostCenterWithCommissionOwner
    moveCostCenterWithContractFinesTerminating
    moveCostCenterWithDecisivenessGranted
    moveCostCenterWithContractProceedsRerminating

## owner expenses (CRUD)
v1 url -> https://app.matiestate.com/owner_expenses

modules
- owner_expenses
- owner_expenses_details []

## bill pattern (CRUD)
v1 url -> https://app.matiestate.com/patterns/bill_pattern

module
- bill_pattern
