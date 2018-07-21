1. Is the feature request clear? Did you feel like you needed more information?

The 'Other Sandwich' type (turkey) is not explicitly mentioned in the readme, I suppose to measure our attention to detail. 

It is unclear why the base price of a sandwich was excluded previously as opposed to adding the cost of a topping. Setting up the base math for a sandwich could have been implemented from the beginning saving us all time! 

Why does the pricing model not differ between pickup and delivery in your sample data? I see a structure in `prices.json` set up to support different prices for delivery and pickup, and testing informally I found that the app actually does alter prices by delivery method. It seems like your original developer never implemented that. ;)

2. Is there anything you would have done differently if you had more time or resources?
More tests. Always more tests. Though I did find it refreshing that your team doesn't write view layer tests, recognizing that view tests, while important for code coverage at times, do not meaningfully contribute to your suite of unit tests like a functional test does.

3. How could the code be structured differently to be easier to work with?

Total is a monster method. One way to split it to be easier to work with would be to have the view layer part separate from the calculate total part. Similarly, I would suggest the author split out the supporting functions into their own JS files to aid in testing.

I'd suggest fewer JSON configuration based options, though I understand the convenience of having a simple JSON to go in and edit rather than needing a separate API call.

The sandwich shop app you delivered is great and does a lot with relatively little code. It was strange to see such little established test coverage for the methods here. I prefer unit tests in the same folder as the components they test. I find it easier to see which files need coverage that way.

I'd suggest de-structuring syntax on things from props or state as I've done in the calculateTotal Method. I feel that syntax makes it easier to understand where props are coming from. Similarly, I'd suggest using variable names other than obj or key for maps or reduces. 

4. Is there anything else you think we should know?
Your test runner doesn't seem to be watching changes when invoked with `test:watch` (I'm on a mac with node 9.4.0). We use a similar setup at work for my react project. For us it was a conflict with our test babel settings.
