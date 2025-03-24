each form has view 
1. create view or file inside folder `views`
-> path `pages/views`
-> import the view in `routes.js` file
-> take a copy of `Account.jsx` file view and replace all things with the important things for the `lessor`
2. create form inside folder `containers`
-> path `components/forms/containers`
3. create service file inside folder `services`
-> path `services`
4. create folder inside folder `helpers`
5. inside folder e.g. `lessor` in folder helpers create 2 or 3 files 
  1. `lessorColumns` for table columns we use library called `tanstack react table`
  2. `lessorValidationSchema` for schema validation for form we use `zod`
  3. `lessorHelpers` optional if you need more logic 

## Notes
- You have many fields `input` `select` in folder `components/forms/fields`
- Important we follow the schema for names and files
- we use transitions so all text should putting in transition file 
