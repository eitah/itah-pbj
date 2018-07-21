1. Is the feature request clear? Did you feel like you needed more information?
It is tough to follow what the base price of a sandwich was as opposed to a topping. Setting up the base math for a sandwich could have been implemented from the beginning saving us all time! The 'Other Sandwich' tab is not explicitly mentioned, i suppose to measure our attention to detail. 

I see a structure set up to support different prices for delivery and pickup, but the JSON is identical. Interesting.

2. Is there anything you would have done differently if you had more time or resources?
More tests. Always more tests. Though I did find it refreshing that your team doesn't write view layer tests, recognizing that view tests, while important for code coverage at times, do not meaningfully contribute to your suite of unit tests like a functional test does.

3. How could the code be structured differently to be easier to work with?

Total is a monster method. One way to split it to be easier to work with would be to have the view layer part seperate from the calculate total part. Similarly, I would suggest the author split out the supporting functions into their own JS files to aid in testing.

Fewer JSON configuration based options, though I understand the convenience of having a simple JSON to go in and edit.

I prefer unit tests in the same folder as the components they test. I find it easier to see which files are untested that way.

It was strange to see such little test coverage for the methods here. 

I'd suggest destructuring syntax on things from props or state as I've done in the calculateTotal Method. I feel that syntax makes it easier to understand where props are coming from. Similarly, I'd suggest using names other than obj or key for maps or reduces. 

4. Is there anything else you think we should know?
Your test runner doesn't seem to be watching changes when invoked with `test:watch`. 
