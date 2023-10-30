# What is this 
An example integration of Fung's Payment Component. Using Nextjs 14, and showing only the client-side implementation, requiring the server-side steps done as a prerequisite.

## Required pre-requisites
1. Node 18+ installed on your system
2. [A checkout created by using Fung's API](https://docs.fungpayments.com/platform-capabilities/payment-components)

# How to use 
1. Clone the repository
2. `cd example-payment-component` && `npm i`
3. Go to `app/page.tsx` and set the `checkoutId` to the `id` taken from response of `POST v2/checkout/createCheckout`.
4. Optionally set the `environment` to `production` if you are testing your production environment. We strongly disencourage you to do so, as you can reliably test your integration using the `sandbox` environment.
5. Run `npm run dev` to start the project
6. Go to `localhost:3000` and do a test payment. 
