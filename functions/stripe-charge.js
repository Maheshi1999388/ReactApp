const stripe = require('stripe')('sk_test_51MJWBBFX0SgScDTmXMiyzzifAO7W0CGC2zEl68zFeQ3icXDisqPFPaw9K8skDExbxwtPRHBu3iWmY42u1mKrxu9f00nExLNRPv')


exports.handler = async function (event){
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer =await stripe.customer.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}
