
// Chrome CSS selector explorer

$$('your css selector')
// >> [element,element,element]


// test if the last clicked element (gtm.click or gtm.linkClick) matches a given selector

dataLayer[dataLayer.length-1]['gtm.element'].matches('your css selector')
// >> true/false

