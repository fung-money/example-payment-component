# What is this 
An example integration of Fung's Payment Component. Using Nextjs 14, and showing only the client-side implementation, requiring the server-side steps done as a prerequisite.

## Required pre-requisites
1. Node 18+ installed on your system
2. [A checkout created by using Fung's API](https://docs.fungpayments.com/platform-capabilities/payment-components)

# How to use 
1. Clone the repository
2. `cd example-payment-component` && `npm i`
3. Update the `checkoutId` in `App.tsx` to a newly created Checkout ID
4. Update the `environment` to `sandbox` or `production` depending on the environment you are currently testing
5. Run `npm run dev` to start the project
6. Go to `localhost:3000` and do a test payment. 
